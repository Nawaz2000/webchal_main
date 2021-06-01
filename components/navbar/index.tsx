import * as React from "react"
import Link from "next/link"
import * as Feather from "react-feather"
const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-12 py-2 md:py-0 md:h-20 flex items-center justify-center box-border px-2 md:px-5 lg:px-16 flex-row-reverse md:flex-row">
      <div
        className="h-full flex items-center"
        style={{ maxWidth: "1600px" }}
      >
        <span className=" font-logo text-wca text-4xl md:text-5xl">Webchal</span>
      </div>
      <div className="flex flex-grow" />
      <div className="hidden lg:flex">
        <Link href="#">
          <span className="text-base mx-8 text-wca">what is webchal ?</span>
        </Link>
        <Link href="#">
          <span className="text-base mx-8 text-wca">why webchal</span>
        </Link>
        <Link href="#">
          <span className="text-base mx-8 text-wca">about us</span>
        </Link>
        <Link href="#">
          <span className="text-base mx-8 text-wca">contact us</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <Feather.Menu className="text-wca" size={30} />
      </div>
    </nav>
  )
}

export default Nav
