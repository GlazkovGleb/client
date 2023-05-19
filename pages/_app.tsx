import { Provider } from 'react-redux';
import { wrapper } from '../store';
import '../styles/global.css';
import { AppProps } from 'next/app'

export default function MyApp({ Component, ...rest }: AppProps): JSX.Element {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}