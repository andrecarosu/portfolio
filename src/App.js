import "./App.css";
import { Route,  Routes } from "react-router-dom";
import HomePrincipal from "./pages/homePrincipal/HomePrincipal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // RESETEA EL SCROLL EN CERO
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </div>
  );
}

export default App;

