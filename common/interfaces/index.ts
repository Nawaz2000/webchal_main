import * as React from "react"

export interface wrapperProps extends childrenProp {
  title?: string
}

interface childrenProp {
  children: React.ReactNode
}
