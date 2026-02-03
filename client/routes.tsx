import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import CafeList from './components/CafeList.tsx'
import RatingForm from './components/Rating.tsx'
import AppLayout from './components/AppLayout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<App />} />
    <Route path="cafe" element={<CafeList />} />
    <Route path="ratings" element={<RatingForm eggBeneId={1} userId={1} />} />
  </Route>,
)
