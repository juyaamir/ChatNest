import MainLayout from "./components/MainLayout.jsx"
import { AuthProvider } from "./Context.jsx"
function App() {


  return (
    
      <AuthProvider >

      <MainLayout />
      </AuthProvider>
    
  )
}

export default App
