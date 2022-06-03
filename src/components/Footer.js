import "./Footer.css";
/* import do módulo css do componente Footer */
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 >Este é um exemplo de um rodapé </h1>
      <Link className="t1" to="/footer"> exemplo de rodapé implementado</Link>
      {/* exemplo de rodapé implementado no componente acima descrito de forma sucinta
      . Assim temos o arquivo Footer sendo renderizado quando clicamos no seu link, fazendo a página home sumir 
      . Os arquivos de css do módulo css será carregado de forma modular, ou seja, não vaza para outro componente
            */}
    </div>
  );
};

export default Footer;
