import React from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <head>
        <title>{'PortfoliosIo | ' + title}</title>
      </head>
    </>
  )
}

export default PageTitle
