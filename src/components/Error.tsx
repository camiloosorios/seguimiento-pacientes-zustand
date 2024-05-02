import { ReactNode } from 'react'

export default function Error({ children } : {children : ReactNode}) {
  return (
    <p className="text-center my-4 bg-red-400 text-white font-bold p-3 uppercase text-sm">{children}</p>
  )
}
