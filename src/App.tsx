import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="container m-auto text-3xl font-bold underline text-red-500">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
