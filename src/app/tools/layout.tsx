import Navbar from '@/components/main/Navbar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='h-full'>
                {children}
            </div>
        </div>
    )
}

export default layout