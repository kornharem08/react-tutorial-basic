import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import routes from "./routes/AppRoutes";
import PrivateRoutes from "./middleware/Auth";
import "./App.css";
import "./assets/fonts.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route element={route.isPrivate ? <PrivateRoutes /> : <Outlet/> }>
              <Route
                key={index}
                path={route.path}
                element={<route.layout>{route.element}</route.layout>} // Render element inside layout
              />
            </Route>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
