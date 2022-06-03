import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); /* quando o usuário clicar no botão de submit
      tal ação impede de carregar a pagina */
    navigate("/search?q=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
