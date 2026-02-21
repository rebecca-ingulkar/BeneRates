import { Outlet, NavLink } from 'react-router'

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background text-primary">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-primary p-6 text-background">
        <h1 className="mb-10 text-2xl font-bold text-accent">Bene Rates</h1>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition ${
                isActive ? 'font-semibold text-accent' : 'hover:text-accent'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cafe"
            className={({ isActive }) =>
              `transition ${isActive ? 'font-semibold text-accent' : 'hover:text-accent'}`
            }
          >
            Cafes
          </NavLink>

          <NavLink
            to="/ratings"
            className={({ isActive }) =>
              `transition ${
                isActive ? 'font-semibold text-accent' : 'hover:text-accent'
              }`
            }
          >
            Rate a Bene
          </NavLink>
        </nav>
        <div className="mt-auto pt-10 text-sm text-muted">
          © 2026 Bene Rates
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  )
}
