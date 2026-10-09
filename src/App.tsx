import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import DestinationDetail from "./pages/DestinationDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/destination/:slug"
          element={<DestinationDetail />}
        />
        {/* Alias to support plural URL like in tutorial */}
        <Route
          path="/destinations/:slug"
          element={<DestinationDetail />}
        />
        {/* 404 fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App