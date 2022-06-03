import { useState, useEffect } from "react";

//custom hook - hook customizado para resgate de dados e criação de novos produtos a partir de uma URL
//assim podemos usar tal hook para resgatar dados e criar dados
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //estados para refatoração do método post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null); //método começa nulo. Caso a
  const [callFetch, setCallFetch] = useState();

  //estado de loading
  const [loading, setLoading] = useState(false);

  //estado de tratamento de erros
  const [error, setError] = useState(null);

  //altera o estado do método se o mesmo passado como argumento for um metodo post
  //e altera as configurações de headers e body a serem preenchidas no ato da requisição POST
  //função array que toma dados de leitura e um método como argumentos, fazendo os devidos settings
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), //objeto javascript sendo parseado em string JSON
      });
      setMethod(method); //após setar a config, setamos o método para ser do tipo POST
    }
  };

  //obtebdo dados através do custom hook, por meio da api nativa jscript FETCH () 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //tentativa de resgate dos dados da api
      try {
        const res = await fetch(url); //método fetch retorna uma URL em formato JSON, que será parseado em objeto JScript
        const dados = await res.json(); //parse de json para objeto javascript
        setData(dados); //set no estado dos dados vindos da api para ser retornado no front
      } catch (error) {
        console.log(error.message);
        setError("houve algum erro ao carregar os dados");
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]); // Array de dependencias. Sempre que alterar o callFetch ou a url  o hook será chamado novamente

  //refatorando o post method
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json(); //parse da string json em objeto javascript
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]); //Mapeamento, de forma que se houver uma
  //alteração na config, method ou url o useEffect será chamado para atuar, sem ficar renderizando toda hora o componente

  return { data, httpConfig, loading, error }; //httpConfig já está manipulando diretamente os estados
  //de config e method. Logo, retornamos somente a arrow function httpConfig.
  //Estamos retornando os objetos de forma a serem desestrurados no componente principal de renderização
  //de forma personalizada a seguir demonstrada...
  //no ato da entrega do produto de fabrica personalizada quando realizarmos as settings do projeto em questão
  //fazendo os mesmos setups iniciais do primeiro peojeto
  //quando iniciarmos a promisse teremos o comportamento de fato assíncrono a ser realizado no ambiente de produção

};
