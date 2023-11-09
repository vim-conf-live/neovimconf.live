import { getCurrentUser, getTicket } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function MyTicket() {
  const [ticketId, setTicketId] = useState<number |null>()

  useEffect(() => {
    getCurrentUser()
      .then(getTicket)
      .then((ticket) => {
        const img = new Image()
        img.src = `/ticket/${ticket}.png`
        img.onload = () => setTicketId(ticket)
      })
  }, [])

  if (!ticketId) return (
    <div className="aspect-og max-w-full object-contain flex justify-center items-center mb-8 shadow-lg text-teal-500 bg-slate-500 rounded-lg">
      <p className="bg-slate-950 p-4 animate-pulse relative rounded-xl shadow">
        generating virtual ticket...
        <span className="animate-ping absolute inset-0 border-4 border-black rounded-xl"></span>
      </p>
    </div>
  )

  return (
    <img src={`/ticket/${ticketId}.png`} alt="" className="shadow-lg rounded-xl" />
  )
}
