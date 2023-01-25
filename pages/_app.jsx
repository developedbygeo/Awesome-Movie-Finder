import { ThemeProvider } from 'next-themes';

import Layout from '@/components/UI/Layout';
import Search from '@/components/UI/Search';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider enableSystem attribute="class">
    <Layout>
      {Component.searchGeneric && (
        <Search
          shouldShowCategories
          defaultPlaceholder="Search for movies or TV shows"
          isWide
        />
      )}
      {Component.simpleSearch && (
        <Search defaultPlatform={Component.defaultPlatformQuery} />
      )}
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
