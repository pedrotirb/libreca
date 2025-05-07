import React from 'react';
import clsx from 'clsx';

interface ModuleTile {
  name: string;
  emoji: string;
  color: string; // tailwind color key
}

export default function HexGrid({ modules }: { modules: ModuleTile[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {modules.map((m) => (
        <button
          key={m.name}
          className={clsx(
            'aspect-square w-24 rounded-2xl text-2xl transition-transform hover:scale-105 focus:outline-none',
            `bg-${m.color}`
          )}
        >
          <span role="img" aria-label={m.name}>
            {m.emoji}
          </span>
        </button>
      ))}
    </div>
  );
}