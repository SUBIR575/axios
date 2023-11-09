import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SingleData from "./Pages/SingleData";
import Layout from "./Components/Layout";
import "./App.css";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ThemeProvider from "./ThemeProvider/ThemeProvider";
import MultistepForm from "./Pages/MultistepForm";
const App = () => {
  return (
    <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/crud" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/multiform" element={<MultistepForm/>}></Route>
                <Route path="/cocktail/:id" element={<SingleData />}></Route>
              </Routes>
            </Layout>
          </PersistGate>
        </Provider>
    </>
  );
};

export default App;
