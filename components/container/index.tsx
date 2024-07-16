import React from 'react'

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='w-full flex justify-center '>
            <div className='container max-w-[415px] w-[415px] h-full flex flex-col items-center gap-0'>
                {children}
            </div>
        </div>

    )
}
