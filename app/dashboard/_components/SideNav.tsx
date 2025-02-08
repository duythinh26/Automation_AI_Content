"use client "
import { Home, FileClock, Settings } from 'lucide-react'
import React from 'react'

const SideNav = () => {

    const MenuList = [
        {
            name: 'Trang chủ',
            icon: Home,
            path: "/dashboard"
        },
        {
            name: 'Lịch sử',
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: 'Cài đặt',
            icon: Settings,
            path: "/dashboard/settings"
        }
    ]

    return (
        <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className='mt-5'>
                {
                    MenuList.map((menu, index) => (
                        <div key={index} className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer'>
                            <menu.icon className='h-6 w-6'/>
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SideNav