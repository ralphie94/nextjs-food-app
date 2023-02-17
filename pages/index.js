import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Los Angeles</title>
        <meta name="description" content="Best pizza in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}
