import React from 'react'

const TopBar = () => {
  return (
    <header className="w-full border-b border-violet-400/20 bg-[#211b2b] text-violet-100 font-mono">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        <div className="flex items-center gap-3 text-sm sm:text-base">
          <span className="text-violet-400">$</span>

          <span className="font-semibold text-violet-50">
            portfolio<span className="text-violet-400">.v1</span>
          </span>

          <span className="hidden text-violet-700 sm:inline">
            //
          </span>

          <span className="hidden text-violet-300/70 sm:inline">
            visitor_mode
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
          </span>

          <span className="text-violet-200">
            connection
          </span>

          <span className="hidden text-violet-700 sm:inline">
            :::
          </span>

          <span className="hidden text-violet-300/60 sm:inline">
            encrypted
          </span>
        </div>

      </div>
    </header>
  )
}

export default TopBar