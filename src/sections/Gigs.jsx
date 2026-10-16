import useUpcomingEvents from '@/hooks/useUpcomingEvents';

const fmt = (iso) =>
  new Date(iso)
    .toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toUpperCase();

const Gigs = () => {
  const events = useUpcomingEvents();

  // Hidden while loading and when there are no upcoming gigs
  if (!events?.length) return null;

  return (
    <div id="gigs" className="flex flex-col items-center justify-center px-5 pb-20 pt-10">
      <h2 className="my-5 font-orbitron text-[46px] font-bold">GIGS</h2>
      <ul className="w-full max-w-3xl">
        {events.map((e) => (
          <li
            key={e.id}
            className="flex flex-col gap-2 border-b border-white/20 py-4 sm:flex-row sm:items-center"
          >
            <span className="font-orbitron text-sm sm:w-48">{fmt(e.date)}</span>
            <span className="flex-1">
              {e.venue}
              <span className="block text-sm opacity-70">{e.city}</span>
            </span>
            {e.ticketUrl && (
              <a
                href={e.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start rounded-full bg-firebrick px-5 py-2 text-sm text-white transition hover:opacity-80 sm:self-auto"
              >
                Tickets
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gigs;
