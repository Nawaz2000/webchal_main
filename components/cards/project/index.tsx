import * as React from "react"

type props = {
  image: string
  title: string
  description: string
}

const ProjectCard: React.FC<props> = ({ title, image, description }: props) => {
  return (
    <div className="flex md:flex-row flex-col md:items-center items-end justify-center max-w-full md:max-w-2xl md:p-4 shadow-xl lg:shadow-md lg:hover:shadow-2xl transform transition-shadow m-4 bg-gray-50 rounded overflow-hidden">
      <div className="md:m-5 w-full">
        <div className="md:w-48 md:h-48 w-full flex items-center justify-center md:rounded-full bg-gray-200">
          <img
            src={image}
            alt={title}
            className="md:h-40 md:w-40 w-full md:rounded-full object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-wca text-3xl mb-2">{title}</h1>
        <p className=" text-sm font-thin">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
