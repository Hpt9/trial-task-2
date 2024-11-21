import React from 'react'
import ChecklistNavigation from './ChecklistContent/ChecklistNavigation'

export default function Checklist() {
  return (
    <div style={{width:"100%"}} className='w-full h-[100vh] bg-white relative z-10 px-32 flex flex-col pt-11 overflow-y-auto'>
      <ChecklistNavigation/>
    </div>
  )
}
