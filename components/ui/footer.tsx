import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="bg-muted py-10">
      <div className="container justify-between flex">
        <a
          href="https://github.com/jamdotdev/dev-starter-pack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground flex items-center hover:underline gap-1"
        >
          <span>Open Source on</span>
          <span className="flex items-center gap-1">
            <GitHubLogoIcon className="text-primary" /> GitHub
          </span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground flex items-center hover:underline gap-1"
        >
          <span className="flex items-center">
            <span className="flex mr-1">Join the alliance</span>
            <ArrowTopRightIcon className="mt-[1px] w-[16px] h-[16px]" />
          </span>
        </a>
      </div>
    </footer>
  );
}
