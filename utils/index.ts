import { ReadonlyURLSearchParams } from 'next/navigation'

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

/**
 * @param {number} n the lenght of random string that you want
 * @returns {string} returns the random string
 *
 * */
export function generateRandomString(n: number): string {
  const alphanumeric =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < n; i++) {
    result += alphanumeric.charAt(
      Math.floor(Math.random() * alphanumeric.length)
    )
  }
  return result
}

export function formatDate(date: Date): string {
  const hours = new Intl.DateTimeFormat('default', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  }).format(date)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${hours} ${day}/${month}/${year}`
}

export const isObject = (
  object: unknown
): object is Record<string, unknown> => {
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}
