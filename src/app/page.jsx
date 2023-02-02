import Image from "next/legacy/image";
import { Inter } from '@next/font/google'
import Head from './head'
import Header from 'components/Header'
import { getSession } from "next-auth/react";
import Login from "components/Login";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({session}) {
  if (!session) return <Login />;
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


export async function getServerSideProps(contex) {
  // Get the user
  const session = await getSession
  return{
    props:{
      session
    }
  }
}
