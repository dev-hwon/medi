import React from "react";
import Layout from "../layouts/Layout";

export default function WorksIndex() {
  return <div>업무폴더</div>;
}

WorksIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
