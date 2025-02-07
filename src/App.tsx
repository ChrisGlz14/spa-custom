import { BrowserRouter } from "react-router-dom";
import Header from './layouts/Header'
import { BannerImg } from "./layouts/BannerImg";
function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <BannerImg />
    </BrowserRouter>
  )
}

export default App
