import React from 'react'
import { Search } from 'lucide-react'

const Header = () => {
    return (
        <div className='p-5 shadow-sm border-b-2 bg-white'>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
                <Search />
                <input type="text" placeholder='Tìm kiếm ...' className='outline-none'/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Header