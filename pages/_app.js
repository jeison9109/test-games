import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Layout } from '../layout'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:'https://test-games-hnvf8xfp9-jeison9109.vercel.app/graphql',
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
