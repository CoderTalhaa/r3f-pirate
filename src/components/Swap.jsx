/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function Swap() {

  const {activeData,handleSwap,data, condition} = useContext(DataContext)

  const SwapClick = (item) => {
    if(condition) return
    handleSwap(item)
  }

  return (
    <div className='h-fit absolute z-20 w-full bottom-0 flex justify-center gap-8 mbb-2 lg:w-fit lg:inset-y-[40%] lg:right-6 lg:flex-col'>
      {data.map((item,i)=> (
        <div key={i}>
          <SwapButton SwapClick={SwapClick} activeID={activeData.id} item={item} />
        </div>
      ))}
    </div>
  )
}

export default Swap


const SwapButton= ({SwapClick, activeID ,item}) => {
  return(
    <div
    className={`cursor-pointer w-9 h-9 p-1 rounded-full drop-shadow-xl bg-white  transition ease-in hover:scale-110 ${
      item.id === activeID ? 'scale-125' : ''
    }`}
    onClick={() => SwapClick(item)}
  >
    <div
      style={{ backgroundColor: item.pallet }}
      className="w-full h-full  rounded-full"
    ></div>
  </div>
  )
}