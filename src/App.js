import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import All_Villas from './pages/All_Villas';
import Add_Villas from './pages/Add_Villas';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<All_Villas></All_Villas>}></Route>
      </Routes>

      <Routes>
        <Route path='/add-villa' element={<Add_Villas></Add_Villas>}></Route>
      </Routes>
      
    </Layout>
  );
}

export default App;
