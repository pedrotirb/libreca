import HexGrid from '@/components/HexGrid';

const modules = [
  { name: 'Ludix', emoji: '🎮', color: 'accent-ludix' },
  { name: 'Spectra', emoji: '🎬', color: 'accent-spectra' },
  { name: 'Domaro', emoji: '🏠', color: 'accent-domaro' },
  { name: 'Ritmo', emoji: '🎵', color: 'accent-ritmo' },
  { name: 'Folio', emoji: '📚', color: 'accent-folio' },
  { name: 'Praxis', emoji: '💬', color: 'accent-praxis' },
  { name: 'Arkea', emoji: '🗄️', color: 'accent-arkea' },
  { name: 'Agora', emoji: '🛍️', color: 'accent-agora' }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-display">Libreca 🐝</h1>
      <HexGrid modules={modules} />
    </main>
  );
}