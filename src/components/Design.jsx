import React from 'react'
import BottomBar from './Bottombar';

function Design() {
  return (
    <div className='design-page'>
        <div className='design-page-main'>
            <div className='design-page-container page-text'>
                Design Canvas
            </div>
        </div>
        <div className='design-page-footer'>
            <BottomBar />
        </div>
    </div>
  )
}

export default Design;

