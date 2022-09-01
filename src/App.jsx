import React from "react";
import { Header } from "./components/containers/Header";
import "./App.css";
import "./index.css";
import Articles from "./components/containers/Articles";
import { UserProvider } from "./components/contexts/UserContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { Layout } from "./components/containers/Layout";
import Footer from "./components/containers/Footer";

const App = () => {
  return (
    <div>
      <UserProvider>
        <ThemeProvider>
          <Layout>
            <Header />
            <Articles />
            <Footer />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
};

export default App;
