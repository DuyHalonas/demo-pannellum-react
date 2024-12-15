import React from "react";
import PannellumViewer from "./components/PannellumViewer";

const App = () => {
  return (
    <div>
      <h1>360° Image Viewer</h1>
      <PannellumViewer image="https://pannellum.org/images/alma.jpg" />
    </div>
  );
};

export default App;
