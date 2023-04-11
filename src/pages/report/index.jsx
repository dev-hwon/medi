import React from "react";
import Layout from "../layouts/Layout";
import useAuth from "@/src/hooks/useMember";

export default function ReportIndex() {

  const { User } = useAuth();
  const { id, name, clinicUse } = User;

  return <div>리포트 {name}</div>;
}

ReportIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
