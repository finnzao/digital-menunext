import '../styles/globals.css';
import { QueryClient, QueryClientProvider} from 'react-query';
import { store } from "../redux/store";
import { Provider } from 'react-redux';
import { AuthProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  )
}
