import { Arrow24x24, Cloudflare24x24 } from "@/app/components/Icons";
import { tools } from "@/app/utils/tools-list";

export default function Home() {
  return (
    <main>
      <header className="flex flex-1 justify-center p-5">
        <div className="flex bg-[#FDDEB3] rounded-md font-medium">
          <div
            role="button"
            tabIndex={1}
            className="flex gap-2 items-center p-1 text-black leading-tight"
          >
            <Cloudflare24x24 />
            <span>In conjunction with Cloudflare Builder Day 2024</span>
            <Arrow24x24 />
          </div>
        </div>
      </header>

      <div className="container text-center mb-14 py-20">
        <h1 className="text-3xl font-semibold mb-5 leading-[1]">
          Dev Starter Pack
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-7 leading-6 font-light text-balance">
          A starter pack of free and discounted dev tools for builders creating
          the next wave of world-changing companies:
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((card) => (
          <div
            key={card.title}
            className="border flex flex-col justify-between p-7 rounded-xl"
          >
            <div className="flex flex-col flex-1">
              <div className="ring-1 ring-border flex rounded-2xl overflow-hidden w-16 h-16 mb-5">
                {card.icon}
              </div>
              <h5 className="mb-1.5">{card.title}</h5>
              <p>{card.description}</p>
            </div>
            <hr className="my-5" />
            <p>{card.offer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
