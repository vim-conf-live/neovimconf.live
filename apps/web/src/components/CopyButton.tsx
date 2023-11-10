import { useCallback, useState, type ReactNode, type ButtonHTMLAttributes, type MapHTMLAttributes, useRef } from "react"

export const CopyButton = ({
  value,
  children,
  className
}: {value: string, children: ReactNode, className: string}) => {
  const [highlight, setHighlight] = useState(false);
  return <button className={`${className} relative`} onClick={useCallback(() => {
    navigator.clipboard.writeText(value)
    setHighlight(true)
    setTimeout(() => setHighlight(false), 1000)
  }, [value])}>
    {highlight && <span className={`
      text-teal-500
      absolute
      bottom-full
      block
      border
      border-teal-500
      px-2
      py-1
      rounded-full
      text-xs
      left-1/2
      -translate-x-1/2
      transition-all
      hover:underline
    `}>copied!</span>}
    {children}
  </button>
}
