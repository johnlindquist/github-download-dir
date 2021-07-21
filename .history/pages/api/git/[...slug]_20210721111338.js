// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import fs from "fs"

export default async (req, res) => {
  console.log(req.query)
  const branch = req.query.slug.pop()
  const [user, repo, ...dir] = req.query.slug

  const zip = await download(
    `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`
  )

  const directory = await unzipper.Open.buffer(zip)
  const path = `${repo}-${branch}/${dir.join("/")}`
  console.log({ path })
  const file = directory.files.find(d => d.path === path)

  console.log(file)

  res.json({ hi: "hi" })
  return
  const content = await file.buffer()

  res.statusCode = 200
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${user}-${repo}-${branch}-${dir.join(
      "-"
    )}.zip`
  )
  res.setHeader("Content-Type", "application/octet-stream")
  res.setHeader("Content-Length", stat.size)
  res.send(content)
}
