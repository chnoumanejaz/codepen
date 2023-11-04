import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen text-sm whitespace-nowrap md:text-base h-screen flex justify-start items-start overflow-hidden">
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="*" element={<Projects />} />
            <Route path="auth" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
