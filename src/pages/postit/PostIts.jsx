//eslint-disable
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function PostIts({ isActive }) {
  return (
    <div className={"layer_postIt" + (isActive ? " active" : "")}>
      <h3>Post It</h3>
      <div className="col_wrap col_gap_16">
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
      </div>
    </div>
  );
}
