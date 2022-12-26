import React from 'react';
import './PageWrapper.scss';

function PageWrapper({ children }: { children: any }) {
  return (
    <div className='page-wrapper'>
      {children}
    </div>
  )
}

export default PageWrapper