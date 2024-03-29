import './App.css';
import Counter from './features/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './features/blog/BlogsList';
import StockChart from './features/stock/StockChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="counter" element={<Counter />} />
            <Route path="stockchart" element={<StockChart />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;