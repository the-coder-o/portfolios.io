type InputValue = string | number | null

// ----------------------------------------------------------------------

export function fNumber(inputValue: InputValue) {
  const locale = 'fr-FR'

  if (inputValue == null || Number.isNaN(inputValue)) return ''

  const number = Number(inputValue)

  const fm = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number)
  const formattedNumber = fm.replace(',', '.')

  return formattedNumber
}
export function fNumberField(inputValue: InputValue) {
  const locale = 'fr-FR'

  if (inputValue == null || Number.isNaN(inputValue)) return ''

  const number = Number(inputValue)

  const fm = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(number)
  const formattedNumber = fm.replace(',', ' ')

  return formattedNumber
}
export function fNumberQuantity(inputValue: InputValue) {
  const locale = 'fr-FR'

  if (inputValue == null || Number.isNaN(inputValue)) return ''

  const number = Number(inputValue)

  const fm = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
  const formattedNumber = fm.replace(',', ' ')

  return formattedNumber
}

// -----------------------------------------------------------------------
export function fNumberCurancy(inputValue: InputValue) {
  const locale = 'fr-FR'

  if (inputValue == null || Number.isNaN(inputValue)) return ''

  const number = Number(inputValue)
  if (number >= 1000000000) {
    return `${(number / 1000000000).toFixed(1)} mlrd`
  }

  // Check if the number is 1 million or greater
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)} mln`
  }

  // Default formatting for numbers less than 1 million
  const fm = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number)

  const formattedNumber = fm.replace(',', '.')

  return formattedNumber
}
// ----------------------------------------------------------------------
export function formatPhoneNumber(inputValue: string): string {
  if (!inputValue) return ''

  const phone9Digit = inputValue.length > 9 ? inputValue.slice(-9) : inputValue

  const cleaned = phone9Digit.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `+ (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
  }

  return phone9Digit
}

// ----------------------------------------------------------------------

export function fData(inputValue: InputValue) {
  if (!inputValue) return ''

  if (inputValue === 0) return '0 Bytes'

  const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

  const decimal = 2

  const baseValue = 1024

  const number = Number(inputValue)

  const index = Math.floor(Math.log(number) / Math.log(baseValue))

  const fm = `${parseFloat((number / baseValue ** index).toFixed(decimal))} ${units[index]}`

  return fm
}
