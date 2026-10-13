import { useEffect, useState } from 'react';

const RELEASE = new Date('2026-10-23T00:00:00+01:00');
const PRESAVE_URL = 'https://distrokid.com/hyperfollow/fallofsaturn/vigil';
const SEEN_KEY = 'vigilModalSeen';

const timeLeft = () => {
  const ms = Math.max(0, RELEASE - Date.now());
  return {
    ms,
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    mins: Math.floor(ms / 60000) % 60,
    secs: Math.floor(ms / 1000) % 60,
  };
};

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [left, setLeft] = useState(timeLeft);
  const released = left.ms === 0;

  // Show once per browser session, 5s after load
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // storage unavailable — just show it
    }
    const t = setTimeout(() => {
      setShowModal(true);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        // ignore
      }
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  // Countdown tick, stops on release
  useEffect(() => {
    if (released) return;
    const id = setInterval(() => setLeft(timeLeft()), 1000);
    return () => clearInterval(id);
  }, [released]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setShowModal(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div
        className={`${
          showModal ? 'z-[99999] opacity-100' : 'pointer-events-none z-0 opacity-0'
        } fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black transition-opacity duration-300`}
      >
        <div className="absolute right-5 top-5">
          <button className="text-white" onClick={() => setShowModal(false)} aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center p-10 text-center">
          <p className="pb-2 font-orbitron text-base leading-[1.1] md:text-[40px]">
            NEW EP — VIGIL
          </p>
          <p className="pb-5 font-orbitron text-sm md:pb-8 md:text-xl">
            {released ? 'OUT NOW' : 'OUT 23 OCTOBER'}
          </p>
          <img
            src="static/images/vigil-ep.webp"
            alt="Vigil EP cover"
            className="w-full max-w-[280px] md:max-w-[420px]"
          />
          {!released && (
            <div className="flex gap-0 pt-6 font-orbitron">
              {Object.entries({
                days: left.days,
                hours: left.hours,
                mins: left.mins,
                secs: left.secs,
              }).map(([unit, value]) => (
                <div key={unit} className="w-14 md:w-24">
                  <div className="text-2xl md:text-4xl">
                    {String(value)
                      .padStart(2, '0')
                      .split('')
                      .map((d, i) => (
                        <span key={i} className="inline-block w-[0.9em] text-center">
                          {d}
                        </span>
                      ))}
                  </div>
                  <div className="text-xs uppercase">{unit}</div>
                </div>
              ))}
            </div>
          )}
          <a
            href={PRESAVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-full bg-firebrick px-8 py-3 text-white transition hover:opacity-80"
          >
            {released ? 'Listen now' : 'Pre-save'}
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
