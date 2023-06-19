import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Game from './Game';
import Layout from './Layout';
import { Provider } from 'react-redux';
import {store} from './Slicers/store'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
