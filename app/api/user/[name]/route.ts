import { NextRequest } from 'next/server'

async function GET(
  req: NextRequest,
  { params: { name } }: { params: { name: string } }
) {
  return new Response(name)
}
export { GET }
