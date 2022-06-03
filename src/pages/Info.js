//uso do hook useParams para pegar a informacao que vem da rota dinãmica
import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  );
};

export default Info;
