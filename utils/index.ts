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
