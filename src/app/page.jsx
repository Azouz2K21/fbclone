import Image from "next/legacy/image";
import { Inter } from '@next/font/google'
import Head from './head'
import Header from 'components/Header'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div>
        <Head>
          <title>Facebook</title>
        </Head>

        <Header />
        
        <main>
          {/* Sidbar */}
          {/* Feed */}
          {/* widgets */}
        </main>
      </div>
    </main>
  )
}
