import React from 'react'
import Link from 'next/link';
import ToolsList from '@/components/ToolsList';
import { Badge } from '@/components/ui/badge';


function Page({ params }: { params: { id: string } }) {

    const tool = ToolsList.find(tool => tool.url === params.id);

    if (!tool) {
        return (
            <div className='bg-[#F2F2F2] h-full text-sm font-medium flex flex-col items-center justify-center gap-3'>
                <svg className='size-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                <p>Tool not found</p>

                <Link href="/" className="flex items-center gap-1 w-fit text-black/60 border-black/20 text-sm border h-11 px-6 rounded-full font-medium mt-6">
                    Go back
                </Link>

            </div>
        )
    }

    const MainComponent = tool.mainComponent;

    return (
        <div className='h-full bg-[#F2F2F2]'>
            <div className="flex mb-32 flex-col items-center px-4">

                <div className="mt-32 text-2xl sm:text-3xl flex flex-col items-center justify-center gap-1">
                    <Badge className='mb-2'>Tool</Badge>
                    <h1 className="font-medium">JSON Visualizer</h1>
                    <h2 className="font-medium opacity-60">Quickly format .json code</h2>
                </div>

                <Link
                    href="#tool"
                    className="flex items-center gap-1 w-fit text-black/60 border-black/20 text-sm border h-11 px-6 rounded-full font-medium mt-12"
                >
                    Continue
                </Link>

            </div>

            <div id='tool' className='max-h-screen h-full bg-[#F2F2F2] p-4'>
                <MainComponent />
            </div>
        </div>
    )
}

export default Page