import dayjs from 'dayjs'

export default function datetime (value, type = 'datetime') {
  let format = ''

  if (type === 'date') {
    format = 'YYYY-MM-DD'
  } else if (type === 'time') {
    format = 'HH:mm:ss'
  } else {
    format = 'YYYY-MM-DD HH:mm:ss'
  }
  return dayjs(value).format(format)
}
