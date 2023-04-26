import React from "react";
import useAuth from "@/src/hooks/useAuth";
import { Timer, diffTime } from "@/src/components/Current";
import useTitle from "@/src/hooks/useTitle";
import MainLayout from "@/src/layouts/main/MainLayout";
// ----------------------------------------------------------------------
ReportIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function ReportIndex() {
  const { User } = useAuth();
  const { id, name, clinicUse } = User;

  useTitle("리포트");

  return <div>리포트 {name}</div>;
}

// ReportIndex.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
