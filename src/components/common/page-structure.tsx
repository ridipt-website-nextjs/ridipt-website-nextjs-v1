import React from 'react'

const page = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='min-h-screen bg-background text-primary-foreground'>
            {/* Main container with proper responsive constraints */}
            <div className='flex flex-col items-center justify-start  mx-auto w-full px-4 py-8'>
                {children}
            </div>
        </div>
    )
}

export default page