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
