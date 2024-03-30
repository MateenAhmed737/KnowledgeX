import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, Blog, Article } from "./pages";
import i18next from "./i18next";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default App;
