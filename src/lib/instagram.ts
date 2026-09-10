export type InstagramReel = {
  code: string;
  permalink: string;
  thumbnail: string;
  caption: string;
};

const HANDLE = "matilde.veterinaria";

const FALLBACK_REELS: { code: string; caption: string }[] = [
  {
    code: "DdC08dTMOk9",
    caption: "Aprovechando el buen tiempo, empezamos con la limpieza",
  },
  {
    code: "Dc7LCDKtVIV",
    caption: "La historia de cómo el destino me unió a mi perrhijo",
  },
  {
    code: "DcwX2nEP6S6",
    caption: "Video en el campo del sur de Chile",
  },
  {
    code: "DcW7qkSPuqU",
    caption: "Vacuna y corte de uñas, con menos estrés",
  },
  {
    code: "DcMjWPsvwa5",
    caption: "Consejo veterinario",
  },
  {
    code: "DcEh07WPvgL",
    caption: "¿Tu perro también come pasto?",
  },
];

function teaser(caption: string) {
  const text = caption
    .replace(/#\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 90 ? `${text.slice(0, 87)}…` : text;
}

function toReel(code: string, caption: string): InstagramReel {
  return {
    code,
    permalink: `https://www.instagram.com/reel/${code}/`,
    thumbnail: `/api/instagram-thumb/${code}`,
    caption: teaser(caption) || "Ver en Instagram",
  };
}

function fromFallback() {
  return FALLBACK_REELS.map((item) => toReel(item.code, item.caption));
}

async function fromGraph(): Promise<InstagramReel[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set(
    "fields",
    "caption,media_type,thumbnail_url,permalink,timestamp",
  );
  url.searchParams.set("limit", "18");
  url.searchParams.set("access_token", token);

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;

  const json = (await res.json()) as {
    data?: {
      caption?: string;
      media_type: string;
      permalink: string;
      thumbnail_url?: string;
    }[];
  };

  const videos = (json.data ?? []).filter(
    (item) => item.media_type === "VIDEO" || item.media_type === "REELS",
  );

  const reels: InstagramReel[] = [];
  for (const item of videos) {
    const match = item.permalink.match(/\/reel\/([A-Za-z0-9_-]+)/);
    if (!match) continue;
    reels.push(toReel(match[1], item.caption ?? ""));
    if (reels.length === 6) break;
  }

  return reels.length === 6 ? reels : reels.length ? reels : null;
}

async function fromPublicPage(): Promise<InstagramReel[] | null> {
  const res = await fetch(`https://www.instagram.com/${HANDLE}/reels/`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      "Accept-Language": "es-CL,es;q=0.9",
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;

  const html = await res.text();
  const unique: string[] = [];
  for (const match of html.matchAll(/\/reel\/([A-Za-z0-9_-]{5,15})\//g)) {
    if (!unique.includes(match[1])) unique.push(match[1]);
    if (unique.length === 6) break;
  }
  if (unique.length < 6) return null;
  return unique.map((code) => toReel(code, ""));
}

export async function getLatestReels(): Promise<InstagramReel[]> {
  try {
    const live = await fromGraph();
    if (live?.length) return live;
  } catch {
    // Continue with the public page or the last known Reels.
  }

  try {
    const listed = await fromPublicPage();
    if (listed?.length) return listed;
  } catch {
    // Instagram often serves a login shell without Reel ids.
  }

  return fromFallback();
}

export const instagramProfileUrl = `https://www.instagram.com/${HANDLE}/`;
