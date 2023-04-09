import React from "react";
import Layout from "../layouts/Layout";

export default function ReportIndex() {
  return <div>리포트</div>;
}

ReportIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
