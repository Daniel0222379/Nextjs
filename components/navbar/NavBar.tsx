import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { Linkscomponent } from '../route/Linkscomponent'


const navItems = [
    {path:'/paternal',text:'Father'},
    {path:'/maternal',text:'Mother'},
    {path:'/family',text:'Family'}
]

export const NavBar = () => {
    return (
        <nav className='flex flex-col bg-blue-800 bg-opacity-30 
            p-2 m-2 h-60 gap-1
            rounded h-15 md:flex-row md:h-20'>
            <Link href='/'>
                <span className='flex hover:text-purple-600 text-4xl mt-3'><HomeIcon className='mr-1' size={40} />Home</span>
            </Link>
            
            <div className='flex-1'></div>

            { navItems.map( navItem =>(
                <Linkscomponent key={navItem.path} {...navItem}/>
            ))}
            

            
        </nav>
    )
}
