import clsx from "clsx";
import Image from "next/image";

export const TechServices = ({ content, heading }: {
  content: {
    title: string;
    description: string;
    image: string;
  }[], heading?: string;
}) => {
  return (
    <div
      className="relative lg:container !max-w-[1400px] lg:mx-auto lg:!flex-row bg-[] flex flex-col lg:gap-1 lg:p-28"
    >
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div
          className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10"
        >
          <div
            className="flex flex-col gap-3 items-start self-start "
          >
            <h3
              className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-secondary  text-muted-foreground px-3.5 pb-px text-sm font-medium  md:text-base"
            // className,
            // }
            >Our Services</h3>
            <div
              className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-left">
              <h4 title="Customized Solutions with Transparency">Customized Solutions with Transparency</h4></div>
            <p className="max-w-screen-md text-pretty text-lg font-light text-muted-foreground  md:text-xl text-left">Are you ready to elevate your business with cutting-edge technology? Partner with us! We empower you to reach your objectives with our bespoke mobile app and web app development services.</p>
          </div>

        </div>
      </div>
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div
          className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0"
        >
          {content.map((item, idx) => (
            <article
              key={idx}
              className="flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-[var(--border)] bg-card shadow-sm  p-4 lg:w-full lg:flex-row lg:p-5"
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-input p-3 ">
                <Image
                  alt={item.title}
                  className="dark:invert"
                  height={24}
                  src={item.image}
                  width={24}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{item.title}</h5>
                <p className="text-pretty truncate text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
