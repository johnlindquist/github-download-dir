// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import fs from "fs"

export default async (req, res) => {
  const branch = Array.from(req.query).pop()
  const path = req.query().join("/")

  console.log({ branch, path })

  res.json({ branc, path })

  return "hi"
  const zip = await download(
    "https://github.com/jquery/jquery/archive/refs/heads/main.zip"
  )

  const directory = await unzipper.Open.buffer(zip)
  const file = directory.files.find(
    d => d.path === `jquery-main/build/release.js`
  )
  const content = await file.buffer()
  console.log(content.toString())

  res.statusCode = 200
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=devices.zip`
  )
  res.setHeader("Content-Type", "application/octet-stream")
  res.setHeader("Content-Length", stat.size)
  res.send(content)
}
