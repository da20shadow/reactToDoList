import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ToDo from './ToDo';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="tasks" element={<ToDo />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
