import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const { fingerprint } = await request.json()

    const key = `portfolio:${id}:views`
    const fingerprintKey = `portfolio:${id}:fingerprints`

    const hasViewed = await redis.sismember(fingerprintKey, fingerprint)

    if (!hasViewed) {
      await redis.incr(key)
      await redis.sadd(fingerprintKey, fingerprint)
    }

    const views = await redis.get<number>(key)
    return NextResponse.json({ views: views || 0 })
  } catch (error) {
    console.error('Error in POST /api/views:', error)
    return NextResponse.json({ error: 'Failed to increment view' }, { status: 500 })
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const key = `portfolio:${id}:views`
    const views = await redis.get<number>(key)
    return NextResponse.json({ views: views || 0 })
  } catch (error) {
    console.error('Error in GET /api/views:', error)
    return NextResponse.json({ error: 'Failed to get views' }, { status: 500 })
  }
}
