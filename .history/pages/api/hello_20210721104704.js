// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import fs from "fs"

export default async (req, res) => {
  const zip = await download(
    "https://github.com/jquery/jquery/archive/refs/heads/main.zip"
  )

  const directory = await unzipper.Open.buffer(zip)
  console.log(directory.files)

  res.statusCode = 200
  res.json({ name: "John Doe" })
}
