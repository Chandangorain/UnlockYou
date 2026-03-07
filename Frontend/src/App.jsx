import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"

function App() {

  return 
    <RouterProvider router={router} />   // RouterProvider is a component that provides the router to the application. It takes the router as a prop and renders the appropriate component based on the current URL.
  

}

export default App          // export to main.jsx then index.html
