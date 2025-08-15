import React from 'react'

const page = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div
      className='w-full'
    >

      <section
        className='flex flex-col  items-center justify-center w-full max-w-6xl mx-auto my-20 gap-10 px-2'
      >{children}</section>
    </div>
  )
}

export default page