import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Layout } from '../layout'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:'https://test-games-rho.vercel.app/api/graphql',
  // uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),

})

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </ApolloProvider>

  );
};
