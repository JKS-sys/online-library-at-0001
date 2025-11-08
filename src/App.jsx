import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-grey-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/browse"
            element={
              <>
                <Header />
                <BrowseBooks />
              </>
            }
          />
          <Route
            path="/books/:category"
            element={
              <>
                <Header />
                <BrowseBooks />
              </>
            }
          />
          <Route
            path="/book/:id"
            element={
              <>
                <Header />
                <BookDetails />
              </>
            }
          />
          <Route
            path="/add-book"
            element={
              <>
                <Header />
                <AddBook />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
