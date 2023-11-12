import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "./pages/Main/Main"
import { Profile } from "./pages/Profile/Profile"
import { Register } from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
import { CreateProperty } from "./pages/CreateProperty/CreateProperty"
import { PropertyDetail } from "./pages/PropertyDetail/PropertyDetail"
import { Header } from "./components/layouts/Header/Header"
import { Footer } from "./components/layouts/Footer/Footer"
import { PropertyProvider } from "./context/PropertyProvider"
import { AuthProvider } from "./context/AuthProvider"
import { WithPrivateRoute } from "./utils/PrivateRoute"
import { EditProperty } from "./pages/EditProperty/EditProperty"
import { ListProperty } from "./components/ListProperty/ListProperty"
import { PropertyNotFound } from "./components/PropertyNotFound/PropertyNotFound"
import { PageNotFound } from "./pages/PageNotFound/PageNotFound"

function App() {

  return (
    <AuthProvider>
      <PropertyProvider>
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/profile" element={<WithPrivateRoute> <Profile /> </WithPrivateRoute>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create-property" element={<CreateProperty />} />
                    <Route path="/details" element={<PropertyDetail />} />
                    <Route path="/editProperty" element={<EditProperty />} />
                    <Route path="/properties" element={<ListProperty />} />
                    <Route path="/notFound" element={<PropertyNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            <Footer />
        </BrowserRouter>
      </PropertyProvider>
    </AuthProvider>
  )
}

export default App
