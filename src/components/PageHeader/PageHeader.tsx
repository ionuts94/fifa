import React from 'react';
import './PageHeader.scss';

type PageHeaderProps = {
  text: string
}

const PageHeader = ({ text }: PageHeaderProps) => {
  return (
    <div className='page-header'>
      <h1>{text}</h1>
    </div>
  )
}

export default PageHeader