// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import unzipper from "unzipper"

export default async (req, res) => {
  const directory = await unzipper.Open.url(
    `https://github.com/jquery/jquery/archive/refs/heads/main.zip`
  )
  const file = directory.files.find(
    d => d.path === "build/release.js"
  )

  console.log((await file.buffer()).toString())

  console.log(zip)
  res.statusCode = 200
  res.json({ name: "John Doe" })
}
