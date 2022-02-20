import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from "./components/chat/chat.component";
import "./App.css";
import { AppBody, AppLoading, AppLoadingContent } from "./app.styles";
import { auth } from "./firebase";
import Login from "./components/login/login.component";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png"
            alt="slack"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
