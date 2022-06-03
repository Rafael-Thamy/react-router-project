import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?"+searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
       <ul className="products">{/* caso em que estamos renderizando os elementos dos parametros de busca */}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes do Produto</Link>

              <hr />
            </li>
          ))}
      </ul> 
    </div>
  );
};

export default Search;
