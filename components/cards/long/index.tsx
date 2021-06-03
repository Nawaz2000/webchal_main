import { cardProps } from "common/interfaces"
import * as React from "react"
import Link from "next/link"
const LongCard: React.FC<cardProps> = ({
  title,
  description,
  goto,
  icon,
}: cardProps) => {
  let Icon = icon
  return (
    <div className="xl:max-w-md max-w-2xl w-full bg-white pt-4 lg:mx-5 my-5 xl:my-0 shadow-2xl rounded-md lg:transform lg:transition-transform lg:hover:scale-105">
      <div className="px-4 w-full flex flex-col justify-start items-start">
        <i className="bg-gray-100 p-2 rounded-full">{icon}</i>
        <h1 className="text-2xl text-wca font-bold mt-10">{title}</h1>
        <p className="font-thin my-10">{description}</p>
      </div>
      <div
        className="flex flex-grow bg-black opacity-30"
        style={{ height: "1px" }}
      />
      <div className="w-full flex items-center justify-center py-5 border-t border-black border-opacity-30">
        <Link href={goto}>
          <span className=" text-black text-opacity-70">explore</span>
        </Link>
      </div>
    </div>
  )
}

export default LongCard
