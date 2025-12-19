import React from 'react'
import logsService from '../lib/logsService';

const Log = () => {
  return (
    <div className=''>
      {logsService.map((log) => (
        <div key={log.id}>
          {log.message}
        </div>
      ))}
    </div>
  )
}

export default Log