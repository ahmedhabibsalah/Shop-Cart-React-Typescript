import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import React from "react";
import { Store } from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContexts";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
