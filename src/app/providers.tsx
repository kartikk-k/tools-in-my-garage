import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </div>
    )
}

export default Providers