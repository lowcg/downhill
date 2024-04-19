import React from 'react'

function SecondaryButton({title="View All",hoverEffectOn=true,color="orange"}) {
  return (
    <button className={`${color==="orange"?"border-orange":"border-white"} ${hoverEffectOn&&(color==="orange"?"hover:bg-orange/30":"hover:bg-white/30")}  duration-300 border-2 rounded-md align-middle font-geistMedium py-1 px-20 flex justify-center`}>{title}</button>
  )
}

export default SecondaryButton;