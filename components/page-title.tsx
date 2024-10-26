import React from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <title>{'PortfoliosIo | ' + title}</title>
    </>
  )
}

export default PageTitle
