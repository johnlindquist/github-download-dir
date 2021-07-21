import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        Replace link to dir
        `https://github.com/jquery/jquery/tree/main/build`
      </p>
      <p>with</p>
      <p>
        Replace
        `https://github-download-dir.vercel.app/api/git/jquery/jquery/tree/main/build`
      </p>
    </div>
  )
}
