import "./App.css";
import { MainLayout } from "./main-layout/main-Layout";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about"
import Shop from "./pages/Shop/shop";
import ShopSingle from "./pages/ShopSingle/shopSingle";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="ShopSingle/:slug" element={<ShopSingle/>}/>
          <Route path="*" element={<h1>page not founted</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


