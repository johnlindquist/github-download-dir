import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        Replace "https://github.com" with
        "https://github-download-dir.vercel.app/api/git"
      </p>
      <p>
        `https://github.com/jquery/jquery/tree/main/build`
      </p>
      <p>becomes</p>
      <p>
        `https://github-download-dir.vercel.app/api/git/jquery/jquery/tree/main/build`
      </p>
    </div>
  )
}
