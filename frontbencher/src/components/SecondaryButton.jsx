import React from 'react'

function SecondaryButton({title="View All",hoverEffectOn=true,color="orange",padding="px-10"}) {
  return (
    <button className={`${color==="orange"?"border-orange":"border-white"} ${hoverEffectOn&&(color==="orange"?"hover:bg-orange/30":"hover:bg-white/30")} ${padding} duration-300 border rounded-md align-middle font-geistRegular py-1 flex justify-center`}>{title}</button>
  )
}

export default SecondaryButton;