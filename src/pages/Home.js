import { Link } from "react-router-dom";

//import do hook customizado
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

//nesse arquivo vamos usar o hook customuzado de forma a resgatar os dados
//da api e usar o recurso de rota para navegar entre paginas

//assim definimos os hooks necessários da api de contexto do hook de api de contexto legal da aplicação
//tal exemplo de aplicação deve definir o progresso como um todo na single page application

const Home = () => {
  const url = "http://localhost:3000/products";

  //desestruturação objetos do custom hook
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h2>produtos da lista</h2>
      {/* se tiver erro =true, imprimir tal erro */}
      {error && <p>{error}</p>}

      {/* função retornando jsx o Map deve ser usado com parenteses */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
              <p>R$: {item.price}</p>
              {/* link para o produto específico */}
              <Link to={`/products/${item.id}`}>Detalhes do Produto</Link>{/* link para o produto
              específico, que vai ser renderizao por meio do Router path =, em App.js */}
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
