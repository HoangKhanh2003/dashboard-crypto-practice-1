
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

// Styles

import Layout from 'src/layout';

import { theme } from '../styles/theme';
import 'antd/dist/antd.css';
import '../styles/globals.css'
import 'chart.js/auto';
import store from 'src/state/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )

}

export default App
