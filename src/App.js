import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiginPage from "./Page/SiginPage/SiginPage";
import HomeTemplates from "./Templates/HomeTemplates";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        <Route path="/signin" element={<SiginPage />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
