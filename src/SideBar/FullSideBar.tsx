import React from 'react'
import { SidebarWithBurgerMenu } from './SidebarWithBurgerMenu'
import './SideBar.scss'

export default function FullSideBar() {
  return (
    <div className='fullSideBar_div absolute top-2 left-5 bg-white rounded-sm py-6 px-4 flex flex-col items-center'>
        <SidebarWithBurgerMenu/>
    </div>
  )
}
