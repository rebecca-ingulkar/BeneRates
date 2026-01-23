import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Bene Rates</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> Bene Rates Inc | 2026</footer>
    </>
  )
}
