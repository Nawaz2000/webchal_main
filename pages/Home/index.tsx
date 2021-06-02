import Wrapper from "components/wrappper"
import * as React from "react"
const Home: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <header className="w-full flex items-center justify-center box-border md:mt-0 lg:mt-28">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center max-w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <div className="w-11/12 lg:w-2/4">
            <img src="/media/images/pp.jpeg" alt="header" className="w-full" />
          </div>
          <div className="w-11/12 lg:w-2/4 box-border my-12">
            <div className="lg:ml-20">
              <h1 className="text-wca text-3xl xl:text-4xl font-semibold mb-5 ">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="font-light text-sm text-gray-800 mb-5 xl:mb-10">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
              <div className="mt-5 flex flex-row ">
                <button className="border-wca border-2 px-4 py-2 text-wca w-48">
                  Discuss with us
                </button>
                <button className="text-white px-4 py-2 bg-wca ml-4 w-48">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

export default Home
