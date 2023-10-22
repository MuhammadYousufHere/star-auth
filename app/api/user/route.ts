import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/common/prisma'

async function GET(req: NextRequest) {
  const name = req.method

  return new Response(`hello ${name}`)
}

async function PATCH(req: NextRequest, { params }: { params: { id: name } }) {}

async function DELETE(
  request: Request,
  { params }: { params: { name: string } }
) {}

export { GET, PATCH, DELETE }
