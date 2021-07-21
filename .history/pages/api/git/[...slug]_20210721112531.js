// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import archiver from "archiver"

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
  const files = directory.files.filter(d =>
    d.path.startsWith(path)
  )

  const archive = archiver("zip", {
    zlib: { level: 9 }, // Sets the compression level.
  })

  for await (const file of files) {
    archive.append(await file.buffer(), { name: file.path })
  }

  res.statusCode = 200
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${user}-${repo}-${branch}-${dir.join(
      "-"
    )}.zip`
  )
  res.setHeader("Content-Type", "application/octet-stream")
  res.setHeader("Content-Length", stat.size)
  res.send(archive)
}
