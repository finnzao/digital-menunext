## Digital Menu Next

O projeto é baseado na exibição de dados  , e como queria usar um método atualizasse meu client side para cada mudanças feita no meu banco de dados  , então optei pela libary useQuery que é um State Management do React, assim poderia ter uma controle de resposta entre meu frontEnd e banco de dados.

```jsx
const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
```
## Pagina do Cardapio 
A ordem de itens exibida para o cardápio ainda está em analise ,futuramente irá haver alteração no design dessa pagina ,porém algo que ira prevalecer deis do começo é a prioridade em exibir itens disponíveis antes dos itens fora do estoque.

Para isso usei o método sort no objeto recebido dos produtos, e através desse método organizava para os valores state ,que é um valor booleano , com false ficava como ultimo da item do array

```jsx
const sortArray = data.sort((a, b) => b.state - a.state);
```

Depois para a criação dos botões de categorias foi feito um novo array através do método reduce, e a intenção do reduce é para não criar mais que um botão com a mesma categoria, então existe uma verificação se o nome daquela categoria já existe no novo array, mas também como um item inicial com todo “Todos” para exibir todos os itens. 

```jsx

let categories= (function () {
        const categories = sortArray.reduce(function (values, item) {
        if (!values.includes(item.category)) {//se dentro do array values ainda tem a categoria do item atual
            values.push(item.category);
        }
        return values;//retornando as categorias sem repetir 
        }, ["Todos"])//Esse é o valor inicial para o array,pois não existe a categoria all na lista de produtos ,ela foi adicionada agora
        return categories
    })()
```
## Pagina do DashBoard
Para melhorar o desempenho da aplicação foi feito apenas um fetch data  no nível de componente de maior ordem de herança ,assim ocorre apenas uma verificação sobre os status dos dados recebido ,evitando novas verificação de dados para cada vez que irá ser usado em algum componente filho .
```jsx

const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
//isso é um recorte do codigo do componente pai "dashboard/index.jsx" 
<FormCreate data={data} />
<IndexTable data={data} />
```

#### Form create 
Boa parte dos tipos de dados para criação do produto são string(Nome,desc,Categoria) e uma float(Preço) , porém é preciso adiciona uma imagem e adicionar imagens direito no banco de dados é uma pratica ruim , principalmente pelo esforço de tratar com blob data(tipo de data relacionado para imagens) na hora de montar a aplicação , então optei em usar o clodinary como banco de dados das imagens , e apenas armazenado o link da imagem no meu objeto de criação do produto.

Para fazer o upload da imagem para o clodinary ,e exibir previa no campo de criação é preciso transformar primeiro os dados da imagens em uma representação de string 
```jsx
const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);//transformando na represetanção em STRING da imagem
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    }; 
```
Para aumentar o fluxo da aplicação , o upload da imagem está sendo feito em um midleware após a verificação de todos os dados do formulário de criação.
