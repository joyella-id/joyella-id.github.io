import React, { useEffect } from "react";

const VidyaAndFaishal = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
  }, []);
  return (
    <iframe
      style={{ border: "none", height: "100vh", width: "100vw" }}
      src={"https://faishal123.github.io/einvite"}
      title="VidyaAndFaishal's Wedding"
    />
  );
};

export default VidyaAndFaishal;
