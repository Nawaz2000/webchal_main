import * as React from "react"

const Footer: React.FC = () => {
  return (
    <div className="w-full mt-24">
      <div
        className="opacity-30 h-80 w-full"
        style={{ backgroundColor: "#B8B5FF" }}
      ></div>
      <div className="w-full bg-wca flex items-center justify-center py-6">
        <span className="text-white text-sm font-light">
          @copyright2021 by WBCHAL
        </span>
      </div>
    </div>
  )
}

export default Footer
