// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import unzipper from "unzipper"

export default async (req, res) => {
  const directory = await unzipper.Open.url(``)
  console.log(directory.files[0])

  console.log(zip)
  res.statusCode = 200
  res.json({ name: "John Doe" })
}
