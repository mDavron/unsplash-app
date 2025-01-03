import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import { Home, About, Contacts } from "./pages";
function App() {
  const routes = createBrowserRouter([]);
  return <RouterProvider router={routes} />;
}

export default App;
