import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import Layout from './layout/Layout';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='*' element={<>Not Found</>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
