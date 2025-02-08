import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}: any) => {
    return (
        <div className='flex flex-col justify-center items-center  p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white'>
            <h2 className='text-3xl font-bold'>Tìm kiếm</h2>
            <div className='w-full flex justify-center items-center'>
                <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
                    <Search className='text-primary'/>
                    <input type="text" placeholder='Tìm kiếm' className='w-full outline-none text-black'
                    onChange={(e) => {
                        onSearchInput(e.target.value)
                    }}/>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchSection