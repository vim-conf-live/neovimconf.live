import { getCurrentUser, getTicket } from "@/lib/auth";
import { useEffect, useState } from "react";
import { version } from "../../package.json"

export default function Ticket({id: ticketId}: {id: string|number}) {
  const [state, setState] = useState<"loading"|"done">("loading")

  useEffect(() => {
    const img = new Image()
    img.src = `/ticket/${ticketId}.png`
    img.onload = () => setState("done")
  }, [])

  if (state === "loading") return (
    <div className="aspect-og max-w-full object-contain flex border justify-center items-center mb-8 shadow-lg text-teal-500 bg-slate-500 rounded-lg w-full">
      <p className="bg-slate-950 p-4 animate-pulse relative rounded-xl shadow">
        generating virtual ticket...
        <span className="animate-ping absolute inset-0 border-4 border-black rounded-xl"></span>
      </p>
    </div>
  )

  return (
    <img src={`/ticket/${ticketId}.png?v${version}`} alt="" className="shadow-lg rounded-xl w-full aspect-og" width={1200} height={600}/>
  )
}
