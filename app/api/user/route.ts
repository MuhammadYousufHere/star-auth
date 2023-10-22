import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/common/prisma'

async function GET(req: NextRequest) {
  const name = req.method
  const res = NextResponse.next()
  console.log(res)

  return new Response(`hello ${name}`)
}

async function PATCH(
  req: NextRequest,
  { params: { name } }: { params: { name: string } }
) {
  console.log(name)
}

async function DELETE(
  request: Request,
  { params: { name } }: { params: { name: string } }
) {
  try {
    console.log(name)
    const user = await prisma.user.findFirst({ where: { isVerfied: true } })
    console.log(user)
  } catch (error) {}
}

export { GET, PATCH, DELETE }
