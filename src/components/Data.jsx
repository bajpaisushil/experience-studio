import React from 'react'
import BottomBar from './Bottombar';

function Data() {
  return (
    <div className='data-page'>
        <div className='data-page-main'>
            <div className='data-page-container' style={{color: 'blue', fontSize: '2rem'}}>
                Data Canvas
            </div>
        </div>
        <div className='data-page-footer'>
            <BottomBar />
        </div>
    </div>
  )
}

export default Data;

