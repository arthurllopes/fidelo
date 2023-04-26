// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  userData: {
    id: number,
      role: string,
      fullName: string,
      username: string,
      email: string
  }
  accessToken: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
  res.status(200).json({
    userData: {
      id: 1,
      role: "admin",
      fullName: "John Doe",
      username: "johndoe",
      email: "admin@materialize.com"
    },
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMjAyODg2LCJleHAiOjE2ODIyMDMxODZ9.DoG2A15N3OJ-yjErlA8qzPkKfQunu9Z6VJq44bG0Eys'
})
}
