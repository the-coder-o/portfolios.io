export function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@')

  if (localPart.length <= 4) {
    return email
  }

  const maskedLocalPart = localPart.slice(0, 4) + '....'
  return `${maskedLocalPart}@${domain}`
}
