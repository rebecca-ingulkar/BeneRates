import { Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <div className="bg-background text-primary flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-primary text-background flex w-64 flex-col p-6">
        <h1 className="text-accent mb-8 text-2xl font-bold">Egg Bene</h1>

        <nav className="flex flex-col gap-3">
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="/cafe" className="hover:text-accent transition">
            Cafes
          </a>
          <a href="/ratings" className="hover:text-accent transition">
            Rate
          </a>
        </nav>
      </aside>

      {/* 👇 THIS is where child routes render */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
