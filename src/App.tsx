import { BrowserRouter } from "react-router-dom";
import { BannerImg } from "./layouts/BannerImg";
import Header from './layouts/Header'
import ProductsSection from "./layouts/ProductsSection";
function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <BannerImg />
      <ProductsSection />
    </BrowserRouter>
  )
}

export default App
