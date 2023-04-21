## Digital Menu Next

O projeto é baseado na exibição de dados  , e como queria usar um método atualizasse meu client side para cada mudanças feita no meu banco de dados  , então optei pela libary useQuery que é um State Management do React, assim poderia ter uma controle de resposta entre meu frontEnd e banco de dados.

```jsx
const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
```
