import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./rotas/index.js";

import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
