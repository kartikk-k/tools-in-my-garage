"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='p-4 flex justify-between items-center'>
            <Link href="/" className='font-semibold md:text-lg'>
                Tools In My Garage
            </Link>

            <div className='gap-3 text-sm hidden md:flex'>
                <button className='bg-neutral-900 text-white px-5 h-11 rounded-full'>
                    Build my garage
                </button>
                <button className='bg-black/10 px-5 h-11 rounded-full'>
                    Github
                </button>
            </div>

            <button className='md:hidden' onClick={() => setIsOpen(true)}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 7H11.5C11.7652 7 12.0196 7.10536 12.2071 7.29289C12.3946 7.48043 12.5 7.73478 12.5 8C12.5 8.26522 12.3946 8.51957 12.2071 8.70711C12.0196 8.89464 11.7652 9 11.5 9H6.5C6.23478 9 5.98043 8.89464 5.79289 8.70711C5.60536 8.51957 5.5 8.26522 5.5 8C5.5 7.73478 5.60536 7.48043 5.79289 7.29289C5.98043 7.10536 6.23478 7 6.5 7ZM13.5 15H18.5C18.7652 15 19.0196 15.1054 19.2071 15.2929C19.3946 15.4804 19.5 15.7348 19.5 16C19.5 16.2652 19.3946 16.5196 19.2071 16.7071C19.0196 16.8946 18.7652 17 18.5 17H13.5C13.2348 17 12.9804 16.8946 12.7929 16.7071C12.6054 16.5196 12.5 16.2652 12.5 16C12.5 15.7348 12.6054 15.4804 12.7929 15.2929C12.9804 15.1054 13.2348 15 13.5 15ZM6.5 11H18.5C18.7652 11 19.0196 11.1054 19.2071 11.2929C19.3946 11.4804 19.5 11.7348 19.5 12C19.5 12.2652 19.3946 12.5196 19.2071 12.7071C19.0196 12.8946 18.7652 13 18.5 13H6.5C6.23478 13 5.98043 12.8946 5.79289 12.7071C5.60536 12.5196 5.5 12.2652 5.5 12C5.5 11.7348 5.60536 11.4804 5.79289 11.2929C5.98043 11.1054 6.23478 11 6.5 11Z" fill="black" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div
                        className='fixed h-screen w-screen top-0 left-0 z-40'
                    >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 100 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3}}
                                onClick={() => setIsOpen(false)}
                                className='bg-black/20 h-full w-full absolute top-0 left-0'
                            />

                            <motion.div
                                initial={{ x: 250 }}
                                animate={{ x: 0 }}
                                exit={{ x: 250 }}
                                transition={{ ease: "easeOut" }}
                                className='relative z-10 h-[100dvh] w-[250px] p-4 pl-0 float-right'
                            >
                                <div className='h-full bg-white w-full rounded-3xl'>
                                    <div className='flex flex-col gap-2 text-sm p-6 items-start'>
                                        <button className='opacity-70'>Build my garage</button>
                                        <button className='opacity-70'>Github</button>
                                    </div>
                                </div>
                            </motion.div>


                    </div>
                )}
            </AnimatePresence>



        </div>
    )
}

export default Navbar