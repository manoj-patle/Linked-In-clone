import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
