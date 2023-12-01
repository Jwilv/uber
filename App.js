import { Provider } from 'react-redux'
import { store } from './store';
import AppRouter from './routes/AppRouter';
import { Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}