import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//config react-router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

/* Função principal do aplicativo que será renderizada dentro do arquivo index.js */
//os componentes que estao fora do componente Routes, mas dentro de BrowserRouter serão fixos
//em todas as páginas da SPA
function App() {
  //definicao da url da api

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* links com react router */}
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* rota dinãmica */}
          <Route path="/products/:id" element={<Product />} />

          {/* nested routes no componente principal */}
          <Route path="/products/:id/info" element={<Info />} />

          {/* Search page . Nesse caso nap precisamos colocar search?q=, como fazemos através do
          hook useNavigate*/}
          <Route path="/search" element={<Search />} />

          {/* Redirect para mudança de páginas. No caso, company seria o antigo elemento que será redirecionado */}
          <Route path="company" element={<Navigate to="/about" />} />

          {/* No match route, para rotas que não estejam denifidas no arquivo principal */}
          <Route path="*" element={<NotFound />} />

          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
