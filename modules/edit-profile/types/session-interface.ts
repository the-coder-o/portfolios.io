export interface SessionInterface {
  id: string
  ip: string
  browser: string
  os: string
  device: 'desktop' | 'mobile'
  lastAccessed: string
  signedIn: string
  isCurrent?: boolean
}
