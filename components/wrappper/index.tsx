import * as React from "react"
import Head from "next/head"
import { wrapperProps } from "common/interfaces"
import Nav from "components/navbar"
const Wrapper: React.FC<wrapperProps> = ({ children, title }: wrapperProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : "WEBCHAL DEVs"}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="md:mb-20 mb-12">
        <Nav />
      </div>

      {children}
      <footer>Footer</footer>
    </>
  )
}

export default Wrapper
