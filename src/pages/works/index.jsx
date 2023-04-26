import React from "react";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
WorksIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function WorksIndex() {
  return <div>업무폴더</div>;
}
