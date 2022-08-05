import React, { useEffect } from "react";
import "./App.css";
import AppRoute from "./components/Routes/AppRoutes";
import WebFont from "webfontloader";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);
  return (
    <div className="font-loader">
      <AppRoute />
    </div>
  );
}

export default App;
