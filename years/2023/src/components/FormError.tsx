import type { ReactNode } from "react"

export const FormError: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="text-red-500 text-sm text-right">
    {children}
  </p>
}
