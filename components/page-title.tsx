import React from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <title>{'PortfoliosWorld | ' + title}</title>
    </>
  )
}

export default PageTitle
