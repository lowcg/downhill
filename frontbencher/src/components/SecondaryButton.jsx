"use client"
import React from 'react'

function SecondaryButton({ title = "View All", hoverEffectOn = true, color = "orange", padding = "px-10", textcolor = "text-white", onClick = null, disabled = false }) {
  return (
    <button disabled={disabled} onClick={()=>onClick&&onClick()} className={`${color==="orange"?"border-orange border-2":"border-white"} ${hoverEffectOn&&(color==="orange"?"hover:bg-orange/30":"hover:bg-white/30")} ${padding} ${textcolor} text-[12px] md:text-[14px] duration-300 border rounded-md align-middle font-geistRegular py-[0.3rem] flex justify-center disabled:border-gray disabled:hover:bg-slate-300 text-nowrap`}>{title}</button>
  )
}

export default SecondaryButton;