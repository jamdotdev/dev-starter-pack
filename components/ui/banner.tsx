import { cn } from "@/lib/utils";

interface BannerProps {
  url: string;
  title: string;
  buttonText: string;
  backgroundImage?: string;
  fullWidth?: boolean;
}

const Banner = (props: BannerProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        window.open(props.url, "_blank", "noopener,noreferrer");
      }}
      className={cn(
        "bg-[#F3F3F3] w-full p-6 rounded-xl flex flex-col flex-1 justify-between",
        {
          "col-span-1 md:col-span-2 lg:col-span-3": props.fullWidth,
        }
      )}
      style={{
        ...(props.backgroundImage && {
          background: `url(${props.backgroundImage}) center center / cover no-repeat`,
        }),
      }}
    >
      <h3 className="text-[28px] mb-2">{props.title}</h3>
      <span className="text-muted-foreground">{props.buttonText}</span>
    </div>
  );
};

export default Banner;
