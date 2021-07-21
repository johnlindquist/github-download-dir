// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"

export default async (req, res) => {
  await download(
    "https://github.com/jquery/jquery/archive/refs/heads/main.zip",
    "../public"
  )
  res.statusCode = 200
  res.json({ name: "John Doe" })
}
