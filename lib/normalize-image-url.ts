export default function normalizeImgUrl(fileUrl: string) {
  return `${process.env.NEXT_PUBLIC_BACK_URL}${fileUrl}`
}
