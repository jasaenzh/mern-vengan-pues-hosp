import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import Layout from './layout/Layout';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='*' element={<>Not Found</>} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </PersistGate>
      </Provider>

    </>
  )
}

export default App
