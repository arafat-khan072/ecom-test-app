import { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthProvider";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log("USER :::>>>", currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path={`/`}
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path={`/dashboard`}
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          {/* <Route
            path={`/form`}
            element={
              <RequireAuth>
                <Form />
              </RequireAuth>
            }
          /> */}
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
