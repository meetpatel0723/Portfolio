import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { Home } from "@/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="grain relative min-h-screen bg-bg font-sans text-text">
        <SmoothScroll />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
