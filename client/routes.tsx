import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import CafeList from './components/CafeList.tsx'
import Layout from './components/Layout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="cafe" element={<CafeList />} />
  </Route>,
)
