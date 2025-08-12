import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const page = ({
    companies,
}:{
    companies:{
        name: string
        image: string
    }[]
}) => {
  return (
    <section
    className='my-40'
    >

        <h2 className="text-center tracking-tight text-muted-foreground mb-5 opacity-50">
        {'Partners'}
      </h2>
      <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
        <div className="bg-linear-to-r from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div className="bg-linear-to-l from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div
          className={clsx("flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12")}
        >
          {companies?.map((company,idx) => (
            <figure
              key={idx}
              className="flex h-20 items-center px-2 py-3 lg:p-4"
            >
              <Image
                alt={company.name}
                className="w-24 lg:w-24"
                height={20}
                src={company.image}
                width={32}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page