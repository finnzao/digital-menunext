
import Head from 'next/head';

export default function Home() {

  return (
    <>
      <Head>
        <title>Cardapio</title>
        <meta name="description" content="Melhor Comida da região" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/12/12426.png" />
      </Head>

    </>
  )


}

export async function getStaticProps(context) {
  return {
    redirect:
    {
      destination: '/cardapio',
      permanet: false
    }
  }
}
