import { Icon } from "@/components/icons";
import { instagramProfileUrl, type InstagramReel } from "@/lib/instagram";
import { site } from "@/lib/site";

export function InstagramReels({ reels }: { reels: InstagramReel[] }) {
  if (reels.length === 0) return null;

  return (
    <section
      id="videos"
      className="scroll-mt-24 px-5 py-14 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="flex items-center gap-2.5 font-serif text-3xl text-forest sm:text-4xl">
              <Icon name="instagram" className="h-6 w-6 text-sage" />
              Videos
            </h2>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              Videos cortos de Matilde sobre el cuidado de perros y gatos.
            </p>
          </div>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sage hover:underline sm:text-sm"
          >
            @{site.instagram}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-6xl">
        <ul className="reel-scroll -mx-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
          {reels.map((reel) => (
            <li
              key={reel.code}
              className="w-[8.5rem] shrink-0 snap-start sm:w-40"
            >
              <a
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-line bg-card shadow-sm"
              >
                <span className="relative block aspect-[9/16]">
                  <img
                    src={reel.thumbnail}
                    alt={reel.caption}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-forest/15" />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-forest">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-px h-3.5 w-3.5 fill-current"
                      aria-hidden
                    >
                      <path d="M8 6.8v10.4L18 12 8 6.8Z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
