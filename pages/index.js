import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hasan ile Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={style.title}>Hasan ile Date</h1>
      </main>
    </div>
  )
}
