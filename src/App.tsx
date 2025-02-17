import { BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { PresentWeb } from "./layouts/PresentWeb";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PresentWeb />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
