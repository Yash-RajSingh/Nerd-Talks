import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage /> }/>
    </Routes>
  </Router>
  </>
  );
};

export default App;
