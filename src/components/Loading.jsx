// src/components/Loading.jsx
import React from "react";
import "../assets/styles/Loading.css";
import SnakeImg from "../assets/images/loadingsnake.png";

export default function Loading() {
  return (
    <div className="Loading-overlay">
      <img src={SnakeImg} alt="Loading" className="Loading-spinner" />
      <p className="Loading-text">Loading…</p>
    </div>
  );
}
