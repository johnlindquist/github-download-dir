// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import unzipper from "unzipper"
import request from "request"

export default async (req, res) => {
  const directory = await unzipper.Open.url(
    request,
    `https://github.com/jquery/jquery/archive/refs/heads/main.zip`
  )

  console.log(directory)

  res.statusCode = 200
  res.json({ name: "John Doe" })
}
