import "./css/App.css";
import React, { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
const Home = lazy(() => import("./pages/Home"));
const Favorites = lazy(() => import("./pages/Favorites"));
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </MovieProvider>
  );
}

export default App;
