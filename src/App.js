import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplates from "./Templates/HomeTemplates";
import MovieDetail from "./Page/MovieDetail";
import Ticket from "./Page/Ticket";
import Login from "./Page/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        <Route path="signin" element={<Login />} />
        <Route path="movie-detail" element={<MovieDetail />} />
        <Route path="ticket" element={<Ticket />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
