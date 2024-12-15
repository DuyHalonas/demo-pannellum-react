import React, { useEffect, useRef } from "react";
import "pannellum/build/pannellum.css";

const PannellumViewer = ({ image, pitch = 0, yaw = 0, hfov = 110 }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && window.pannellum) {
      window.pannellum.viewer(viewerRef.current, {
        imageType: "equirectangular",
        panorama: image,
        pitch: pitch,
        yaw: yaw,
        hfov: hfov,
        autoLoad: true,
      });
    }
  }, [image, pitch, yaw, hfov]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "1000px",
        height: "550px",
        marginLeft: "270px",
        borderRadius: "10px",
      }}
    />
  );
};

export default PannellumViewer;
