import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from "../redux/store";
import { Provider } from 'react-redux';
import { AuthProvider } from '../contexts/AuthContext';
import { AppProps } from 'next/app';
import { GlobalProvider } from '../contexts/GlobalProvider';

type ComponetWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
}
export default function App({ Component, pageProps }: ComponetWithPageLayout) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <AuthProvider>
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  )

}

export async function getStaticProps(context:any) {
  return {
    redirect:
    {
      destination: '/cardapio',
      permanet: false
    }
  }
}
