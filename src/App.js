import MainContainer from './containers/mainContainer';
import { Provider } from 'react-redux';
import { store } from './duck/store/store';

const App = () => {
  return(
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App