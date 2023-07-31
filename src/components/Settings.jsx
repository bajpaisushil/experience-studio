import React from 'react'
import BottomBar from './Bottombar';

function Settings() {
  return (
    <div className='setting-page'>
        <div className='setting-page-main'>
            <div className='setting-page-container' style={{color: 'blue', fontSize: '2rem'}}>
                setting Canvas
            </div>
        </div>
        <div className='setting-page-footer'>
            <BottomBar />
        </div>
    </div>
  )
}

export default Settings;

