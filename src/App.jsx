import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'

import Root from './layouts/Root'
import Planet from './layouts/Planet'
import PlanetDetails from './pages/PlanetDetails'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/earth" />} />
      <Route path=":name" element={<Planet />} errorElement={<Error />}>
        <Route index element={<PlanetDetails image="planet" type="overview" />} />
        <Route path="structure" element={<PlanetDetails image="internal" type="structure" />} />
        <Route path="surface" element={<PlanetDetails image="planet" type="geology" />} />
      </Route>
      <Route path="*" element={<Navigate to="/earth" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
