export default function ShowUs() {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        window.open(
          "https://8wvzuv0oszm.typeform.com/dev-pack-builds",
          "_blank",
          "noopener,noreferrer"
        );
      }}
      className="share-banner bg-[#F3F3F3] w-full p-6 rounded-xl flex flex-col flex-1 justify-between"
    >
      <h3 className="text-[28px] mb-0">
        Show us what you&apos;re building with this stack of tools
      </h3>

      <span className="text-muted-foreground">Share</span>
    </div>
  );
}
