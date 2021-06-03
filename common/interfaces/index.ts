import * as React from "react"

export interface wrapperProps extends childrenProp {
  title?: string
}

interface childrenProp {
  children: React.ReactNode
}

// ------------------

export interface cardProps {
  title: string
  description: string
  goto: string
  icon: React.ReactElement
}

export interface FSprops {
  title: string
  description: string
  image: string
  makeButtonVisible: boolean
  buttontext?: string
  reverse?: boolean
}