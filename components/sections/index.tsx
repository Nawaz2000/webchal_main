import * as React from "react"
import { FSprops } from "common/interfaces"
import { HollowButton } from "components/buttons"
import clsx from "clsx"
/**
 *
 * @param {string} title  title for the section
 * @param {string} description some description for the section
 * @param {string} image source path of the image
 * @param {boolean} makeButtonVisible required to make the button visible
 * @param {string} buttontext text for the button
 * @returns JSX element
 */
const FeatureSection: React.FC<FSprops> = ({
  title,
  description,
  image,
  makeButtonVisible,
  buttontext,
  reverse = false,
}: FSprops) => {
  return (
    <div
      className={clsx([
        "w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex items-center my-10 flex-col",
        reverse ? `lg:flex-row-reverse` : `lg:flex-row`,
      ])}
    >
      <div className="w-11/12 lg:w-2/4 mb-5 lg:mb-0">
        <img src={image} className="w-full shadow-2xl" />
        {/* <div className="absolute -top-5 left-0 right-0 -bottom-5 bg-gray-400 opacity-40" /> */}
      </div>
      <div
        className={clsx([
          "w-11/12 lg:w-2/4 flex flex-col justify-center mb-5",
          reverse ? "lg:mr-20" : "lg:ml-20",
        ])}
      >
        <h1 className="text-wca text-3xl xl:text-4xl font-semibold mb-5">
          {title}
        </h1>
        <p className="font-thin">{description}</p>
        {makeButtonVisible && (
          <div className="mt-5">
            <HollowButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureSection
