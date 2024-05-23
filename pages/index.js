import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hasan ile Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="bouncing-blobs-container">
          <div class="bouncing-blobs-glass"></div>
          <div class="bouncing-blobs">
            <div class="bouncing-blob bouncing-blob--blue"></div>
            <div class="bouncing-blob bouncing-blob--blue"></div>
            <div class="bouncing-blob bouncing-blob--blue"></div>
            <div class="bouncing-blob bouncing-blob--white"></div>
            <div class="bouncing-blob bouncing-blob--purple"></div>
            <div class="bouncing-blob bouncing-blob--purple"></div>
            <div class="bouncing-blob bouncing-blob--pink"></div>
          </div>
        </div>
        <div class="hero">
          <h2>Hasan Seninle Bir Yaşam Sonsuz Bir Roman</h2>
          <p>It works by adding blurred blobs that bounce off the screen edge</p>
        </div>
      </main>
    </div>
  )
}
