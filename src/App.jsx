import React, { useState } from 'react'

const App = () => {
  const [BJP, setBjp] = useState(0);
  const [Congress, SetCongress] = useState(0);
  const [Sp, setSp] = useState(0)
  const [BSP, setBSP] = useState(0)

  function votecout() {
    setBjp((prev) => prev + 1);
  }
  return (
    <div className='flex flex-col  items-center justify-center pt-20 gap-5'>
      <div className='flex gap-5 items-center'>
        <div className='h-12 w-24 bg-orange-600 rounded-2xl p-3' onClick={() => votecout()}>🪷 BJP</div>
        <div>{BJP}</div>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='h-12 w-24 bg-blue-200 rounded-2xl p-3 text-[12px]' onClick={()=>votecout()}>✋ Congress</div>
        <div>{Congress}</div>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='h-12 w-24 rounded-2xl p-3 bg-red-700'onClick={()=>votecout()} >🚲 Sp</div>
        <div>{Sp}</div>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='h-12 w-24 rounded-2xl p-3 bg-blue-800'onClick={()=>votecout()}>🐘 BSP</div>
        <div>{BSP}</div>
      </div>
    </div>
  )
}

export default App
