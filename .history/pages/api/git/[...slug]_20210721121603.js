// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import archiver from "archiver"

export default async (req, res) => {
  console.log(req.query)
  const [user, repo, tree, branch, ...dir] = req.query.slug

  const zip = await download(
    `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`
  )

  const directory = await unzipper.Open.buffer(zip)
  const path = `${repo}-${branch}/${dir.join("/")}`
  const files = directory.files.filter(d =>
    d.path.startsWith(path)
  )

  const archive = archiver("zip", {
    zlib: { level: 9 }, // Sets the compression level.
  })

  for await (const file of files) {
    console.log(`Adding ${file.path}`)
    archive.append(await file.buffer(), { name: file.path })
  }

  archive.finalize()

  res.statusCode = 200
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${user}-${repo}-${branch}-${dir.join(
      "-"
    )}.zip`
  )
  res.setHeader("Content-Type", "application/octet-stream")
  res.send(archive)

  //test: http://localhost:3000/api/git/wesbos/beginner-javascript/tree/master/exercises
}
