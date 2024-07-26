import '@/styles/normalize.css';
import '../styles/main.scss';

// redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
