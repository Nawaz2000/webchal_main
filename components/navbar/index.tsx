import * as React from "react"

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center box-border px-5">
      <div
        className="h-full flex flex-grow items-center"
        style={{ maxWidth: "1600px" }}
      >
        <span className=" font-logo text-wca">Webchal</span>
      </div>
    </nav>
  )
}

export default Nav
