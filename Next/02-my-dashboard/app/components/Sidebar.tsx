import Image from 'next/image'
import React from 'react'
import { SidebarMenuItem } from './SidebarMenuItem'
import { IoBrowsersOutline, IoCalculatorOutline } from 'react-icons/io5'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline />,
        title: 'Dashboard',
        subtitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline />,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },
]

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={50}
                            height={50}
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Agustin Lorenzatto
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem  {...item} key={item.path} />
                    ))
                }

            </div>
        </div>
    )
}
