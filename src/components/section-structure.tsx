import React from 'react'

const page = ({
  children,
  className
  ,id
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return (
    <div
      className='w-full'
    >

      <section
        id={id}
        className={`flex flex-col  items-center  justify-center w-full container mx-auto my-20 gap-10  !px-1 ${className}`}
      >{children}</section>
    </div>
  )
}

export default page