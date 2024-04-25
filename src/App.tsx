import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import QuotesPage from "./QuotesPage";
import QuotesPageNumber from "./QuotesPageNumber";
import RegisterPage from "./RegisterPage";
import MyProfile from "./MyProfile";
import { CredentialProvider } from "./providers/CredentialProvider";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CredentialProvider>
                    <Routes>
                        <Route path="/register" Component={RegisterPage} />
                        <Route path="/quotes" Component={QuotesPage} />
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/myprofile" Component={MyProfile} />
                        {/* <Route path="/" Component={PrivateRoute}>
                            <Route path="/myprofile" Component={MyProfile} />
                        </Route> */}
                    </Routes>
                </CredentialProvider>
            </header>
        </div>
    );
}

export default App;
