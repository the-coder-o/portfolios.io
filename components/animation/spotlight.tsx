import React from 'react'

export const Spotlight = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-40 max-lg:hidden">
      <div
        className="absolute left-0 top-0"
        style={{
          transform: 'translateY(-350px) rotate(-45deg)',
          width: '560px',
          height: '1380px',
          background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(179, 217, 255, 0.08) 0px, rgba(26, 140, 255, 0.02) 50%, rgba(0, 115, 230, 0) 80%)',
        }}
      ></div>
      <div
        className="absolute left-0 top-0"
        style={{
          transform: 'rotate(-45deg) translate(5%, -50%)',
          transformOrigin: 'left top',
          width: '240px',
          height: '1380px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(179, 217, 255, 0.06) 0px, rgba(26, 140, 255, 0.02) 80%, transparent 100%)',
        }}
      ></div>
      <div
        className="absolute left-0 top-0"
        style={{
          position: 'absolute',
          borderRadius: '20px',
          transform: 'rotate(-45deg) translate(-180%, -70%)',
          transformOrigin: 'left top',
          top: '0px',
          left: '0px',
          width: '240px',
          height: '1380px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(179, 217, 255, 0.04) 0px, rgba(0, 115, 230, 0.02) 80%, transparent 100%)',
        }}
      ></div>
    </div>
  )
}
