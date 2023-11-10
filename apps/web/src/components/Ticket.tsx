import { getCurrentUser, getTicket } from "@/lib/auth";
import { useEffect, useReducer } from "react";

type Actions =
  | { type: "timeout" }
  | { type: "loaded", ticketId: string }

type State =
  | { state: "loading", error: null, ticketId: null }
  | { state: "done", ticketId: string, error: null }
  | { state: "done", ticketId: null, error: string }


const reducer = (state: State, action: Actions): State => {
  if (action.type === "loaded" && state.state === "loading") {
    return {
      state: "done",
      ticketId: action.ticketId,
      error: null
    }
  }

  if (action.type === "timeout" && state.state === "loading") {
    return {
      state: "done",
      error: "Virtual ticket image generation timed out. Your ticket is safe! Please try again later.",
      ticketId: null
    }
  }

  return state
}

export default function Ticket({ ticketId }: { ticketId?: number | string }) {
  const [state, dispatch] = useReducer(reducer, { state: "loading", error: null, ticketId: null })


  useEffect(() => {
    const chain = ticketId
      ? Promise.resolve(ticketId)
      : getCurrentUser().then(getTicket)

    chain
      .then((ticket) => {
        const img = new Image()
        img.src = `/ticket/${ticket}.png`

        const timeout = setTimeout(() => {
          dispatch({ type: "timeout" })
        }, 8_000)

        img.onload = () => {
          clearTimeout(timeout)
          dispatch({ type: "loaded", ticketId: String(ticket) })
        }
      })
  }, [])

  if (state.error) return (
    <div className="aspect-og max-w-full object-contain flex justify-center items-center mb-8 shadow-lg text-amber-500 bg-slate-300 dark:bg-slate-800 rounded-lg w-full">
      <p className="bg-slate-950 p-4 relative rounded-xl shadow m-8">
        {state.error}
      </p>
    </div>
  )

  if (!state.ticketId) return (
    <div className="aspect-og max-w-full object-contain flex justify-center items-center mb-8 shadow-inner text-teal-500 bg-slate-300 dark:bg-slate-800 rounded-lg w-full">
      <p className="bg-slate-950 p-4 animate-pulse relative rounded-xl shadow text-xl">
        generating virtual ticket...
        <span className="animate-ping absolute inset-0 border-4 border-black rounded-xl"></span>
      </p>
    </div>
  )

  return (
    <img src={`/ticket/${state.ticketId}.png`} width={1200} height={600} alt="" className="shadow-lg rounded-xl" />
  )
}
