import { Button } from "../ui/button";
import { NavbarButton } from "../ui/resizable-navbar";

interface CallToActionContentProps {
  heading: string;
  subheading: string;
  buttonText: string;
  onButtonClick?: () => void;  // optional click handler
  className?: string;
}

export const CallToActionContent: React.FC<CallToActionContentProps> = ({
  heading,
  subheading,
  buttonText,
  onButtonClick,
  className = ''
}) => {
  return (
    <article className={`flex flex-col justify-center items-center gap-9 self-stretch p-6 lg:flex-row lg:justify-between lg:p-1 ${className}`}>
      <div className="flex relative justify-between flex-row items-center transition-all duration-300 ease-in-out gap-3 w-full">
        <div className="flex-col flex flex-2 justify-between items-stretch">
          <div className="flex gap-2 items-center justify-center flex-col">
            <h4 className="text-3xl font-medium text-primary lg:text-4xl">{heading}</h4>
            <h5 className="text-lg text-muted-foreground lg:text-xl">{subheading}</h5>
          </div>
          <div className="mt-5 align-bottom items-center flex flex-1 justify-center">
            <Button
              className=" rounded-lg p-3 px-4 transition-all hover:border-accent-foreground border-2 border-[transparent] duration-300 ease-in-out"
              // variant="primary"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
