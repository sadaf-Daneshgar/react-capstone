import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/countries/:name" element={<DetailPage />} />
          <Route path="*" element={<p>404 page not found</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
