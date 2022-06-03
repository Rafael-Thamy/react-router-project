//pagina p renderizar apenas um componente baseado no id informado na rota de parametros
//na url de acesso ao respectivo dado, que via de regra é um id dinâmico gerado auto-
//maticamente no banco de dados

import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  //rota dinamica
  //retorna um objeto com todos os parametros da url. Logo podemos trabalhar com destructuring objects
  //a variavel de desestruturação deve ser igual ao parâmetro informado apos os dois pontos definidos
  //na rota dinamica de acesso(no caso.../:id)

  const { id } = useParams(); //hook específico para rotas dinãmicas na URL. Como o hook retorna
  // um objeto, podemos fazer destructuring por meio da criação de uma variável a partir de uma chave(id, nesse caso)
  const url = "http://localhost:3000/products/" + id;

  //carregamento do dado individual, por meio de desestruturação de objetos
  const { data: product, loading, error } = useFetch(url);

  //chamar o produto no console
  console.log(product);

  return (
    <>
      <p>Id do produto: {id}</p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...Aguarde</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$: {product.price}</p>
          {/* Nested routes são rotas parentes que ficam proximas pela similaridade dos dados
          passados como parametros na url de acesso*/}
          <Link to={`/products/${product.id}/info`}>
            Mais informações sobre o produto em questão
          </Link>
        </div>
      )}
    </>
  );
};

export default Product;
