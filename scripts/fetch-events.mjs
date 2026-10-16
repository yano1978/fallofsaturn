// Fetches upcoming events from Bandsintown and writes public/events.json.
// Runs in the deploy workflow (keys from GitHub secrets) and locally via `yarn fetch-events` (keys from .env).
// Never fails the build: on missing keys or API errors it writes an empty list.
import { writeFileSync } from 'node:fs';

const { BANDSINTOWN_APP_ID: appId, BANDSINTOWN_ARTIST_ID: artistId } = process.env;
const out = 'public/events.json';

// Bandsintown appends our app_id to event/offer URLs; never publish it
const stripKey = (u) => {
  if (!u) return null;
  const url = new URL(u);
  url.searchParams.delete('app_id');
  return url.toString();
};

const save = (events) => {
  writeFileSync(out, JSON.stringify(events, null, 2));
  console.log(`events.json: ${events.length} event(s)`);
};

if (!appId || !artistId) {
  console.warn('Bandsintown env vars missing, writing empty events.json');
  save([]);
  process.exit(0);
}

try {
  const res = await fetch(
    `https://rest.bandsintown.com/artists/id_${artistId}/events?app_id=${appId}`
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  save(
    data.map((e) => ({
      id: e.id,
      date: e.datetime,
      venue: e.venue?.name ?? 'TBA',
      city: [e.venue?.city, e.venue?.country].filter(Boolean).join(', '),
      ticketUrl: stripKey(e.offers?.find((o) => o.url)?.url ?? e.url),
    }))
  );
} catch (err) {
  console.warn(`Bandsintown fetch failed (${err.message}), writing empty events.json`);
  save([]);
}
