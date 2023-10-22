import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const response = NextResponse.next()
  console.log(response)
  console.log(request.url)
  return new Response('Hello, Next.js!')
}
