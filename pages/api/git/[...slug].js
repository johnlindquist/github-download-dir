// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import download from "download"
import unzipper from "unzipper"
import archiver from "archiver"

export default async (req, res) => {
  console.log(`Starting with ${req.query.slug}`)
  try {
    const [user, repo, tree, branch, ...dir] =
      req.query.slug

    const zipUrl = `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`
    console.log(`Downloading: ${zipUrl}`)
    const zip = await download(zipUrl)

    const zipName = `${user}-${repo}-${branch}-${dir.join(
      "-"
    )}.zip`

    const directory = await unzipper.Open.buffer(zip)
    const path = `${repo}-${branch}/${dir.join("/")}`
    const files = directory.files.filter(
      d => d.path.startsWith(path) && !d.path.endsWith("/")
    )

    const archive = archiver("zip", {
      zlib: {
        level: 9,
      },
    })

    res.statusCode = 200
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${zipName}`
    )
    res.setHeader(
      "Content-Type",
      "application/octet-stream"
    )

    archive.pipe(res)

    for await (const file of files) {
      const buffer = await file.buffer()
      archive.append(buffer, {
        name: file.path,
      })
    }

    archive.finalize()

    await new Promise(r => {
      setTimeout(() => {
        r()
      }, 60000)
    })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
