import React from "react";
import { Outlet } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
