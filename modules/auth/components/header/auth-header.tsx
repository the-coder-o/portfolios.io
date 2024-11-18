import React from 'react'

interface AuthHeaderProps {
  title: string
}

export const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <div className={'mb-3.5 flex flex-col gap-1.5'}>
      <h2 className="text-2xl font-bold leading-9 tracking-tight">
        <span className="inline-block bg-gradient-to-r from-[#ff69b4] via-[#da70d6] to-[#9370db] bg-clip-text font-bold text-transparent">{title} for dashboard</span>
      </h2>
      <p className={'text-xl max-sm:text-sm'}>Unlock your potential with our curated collection of 179+ exceptional portfolio designs. Each template is crafted to highlight your unique skills and creativity, helping you stand out in any industry.</p>
    </div>
  )
}
