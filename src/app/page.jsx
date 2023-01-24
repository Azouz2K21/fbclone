import Image from 'next/image'
import { Inter } from '@next/font/google'
import Head from './head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div>
        <Head>
          <title>Facebook</title>
        </Head>

        <p>
          Lets build Facebook
        </p>
      </div>
    </main>
  )
}
