export function formatDate(date: string) {
  const dateToFormat = new Date(date)
  const months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek']

  const day = dateToFormat.getDate()
  const monthIndex = dateToFormat.getMonth()
  const year = dateToFormat.getFullYear()

  return `${day}-${months[monthIndex]}, ${year}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dateFormat(date: any) {
  const dateUz = new Date(date)
  const formatter = new Intl.DateTimeFormat('ru-Ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const formattedDate = formatter.format(dateUz)
  return formattedDate
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDayAndMonth(date: any) {
  const dateUz = new Date(date)
  const formatter = new Intl.DateTimeFormat('ru-Ru', {
    day: '2-digit',
    month: '2-digit',
  })
  const formattedDate = formatter.format(dateUz)
  return formattedDate
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatDateForBot = (dateStr: any) => {
  const [day, month] = dateStr.split('-')

  const formattedDate = `${day}.${month}`

  return formattedDate
}

export function getMonthStartAndEndDates(year: number) {
  const currentMonth = new Date()
  const monthDates = []
  const monthNamesUzbek = [
    'Yanvar', // January
    'Fevral', // February
    'Mart', // March
    'Aprel', // April
    'May', // May
    'Iyun', // June
    'Iyul', // July
    'Avgust', // August
    'Sentabr', // September
    'Oktabr', // October
    'Noyabr', // November
    'Dekabr', // December
  ]
  for (let month = 4; month <= currentMonth.getMonth(); month += 1) {
    const startDate = new Date(year, month, 1)
    const endDate = new Date(year, month + 1, 0)

    monthDates.push({
      month: monthNamesUzbek[month],
      start_date: formatDateForFilter(startDate),
      end_date: formatDateForFilter(endDate),
    })
  }

  return monthDates
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function timeParse(timeParese: any) {
  const date = new Date(timeParese)
  const timePart = date.toTimeString().split(' ')[0] // "06:19:53"
  return `${timePart}`
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseDateTime(dateTimeString: any) {
  const date = new Date(dateTimeString)

  // Get day, month, and year
  const day = date.getDate()
  const monthNames = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  // Get hours and minutes
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  // Format the date and time
  return `${day}-${month}, ${year}. ${hours}:${minutes}`
}
function formatDateForFilter(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}
