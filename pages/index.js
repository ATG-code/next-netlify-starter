import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Date Site!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tarih Seçici Uygulama!" />
        <p className="description">
          Lütfen bir tarih seçin:
        </p>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
        />
        <p className="description">
          Seçilen tarih: {selectedDate}
        </p>
      </main>

      <Footer />
    </div>
  )
}
