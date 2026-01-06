import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          React 18 • Vite • Tailwind CSS
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">
          Starter ready for modern UI work.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          This scaffold uses React 18 with TypeScript, powered by Vite and styled with
          Tailwind CSS utilities.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            onClick={() => setCount((value) => value + 1)}
          >
            Count is {count}
          </button>
          <span className="text-sm text-slate-400">
            Click the button to verify state and Tailwind styling.
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
