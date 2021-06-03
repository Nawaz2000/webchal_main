import LongCard from "components/cards/long"
import Wrapper from "components/wrappper"
import * as React from "react"
import * as Feather from "react-feather"
const Home: React.FunctionComponent = () => {
  let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  const HollowButton = () => (
    <button className="border-wca border-2 px-4 py-2 text-wca w-48">
      Discuss with us
    </button>
  )
  const FilledButton = () => (
    <button className="text-white px-4 py-2 bg-wca ml-4 w-48">
      contact us
    </button>
  )
  return (
    <Wrapper>
      <header className="w-full flex items-center justify-center box-border md:mt-0 lg:mt-28">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center max-w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <div className="w-11/12 lg:w-2/4">
            <img src="/media/images/pp.jpeg" alt="header" className="w-full" />
          </div>
          <div className="w-11/12 lg:w-2/4 box-border my-12">
            <div className="lg:ml-24">
              <h1 className="text-wca text-3xl xl:text-4xl font-semibold mb-5 ">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="font-light text-sm text-gray-800 mb-5 xl:mb-10">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
              <div className="mt-5 flex flex-row ">
                <HollowButton />
                <FilledButton />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full flex flex-col items-center md:mt-20 mt-16">
        <h1 className="text-wca text-2xl md:text-3xl font-bold">{`Get What you wish for`}</h1>
        <div className=" w-full mt-5" style={{ backgroundColor: "#6807F930" }}>
          <div className="py-10 flex xl:flex-row flex-col items-center justify-center px-3">
            <LongCard
              title="some title"
              description={description}
              goto="/#"
              icon={<Feather.Clock size={50} color="#7868E6" strokeWidth={1} />}
            />
            <LongCard
              title="some title"
              description={description}
              goto="/#"
              icon={
                <Feather.Clipboard size={50} color="#7868E6" strokeWidth={1} />
              }
            />
            <LongCard
              title="some title"
              description={description}
              goto="/#"
              icon={
                <Feather.Bookmark size={50} color="#7868E6" strokeWidth={1} />
              }
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <HollowButton />
        </div>
      </section>
    </Wrapper>
  )
}

export default Home
