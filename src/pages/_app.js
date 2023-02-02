import React from 'react'
import '../app/globals.css'
import { SessionProvider } from "next-auth/react"

function MyAPP({
    Component,
    pageProps: { session, ...pageProps },
  }) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }

export default MyAPP
