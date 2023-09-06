import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      {/* 컴포넌트 */}
      <Route path='/product' element={<Product/>} />

      {/* URL 파라미터 형식으로 Route 구성하기 */}
      {/* :pro_no 써진 그대로 사용하는 것이 아니라 URL에 적힌 값이 객체형태로 받아와짐 */}
      <Route path='/product/:pro_no' element={<ProductDetail/>} />

      <Route path="/productDetail2" element={<ProductDetail2/>} />

    </Routes>
  );
}

export default App;
