import MainLayout from "../layouts/main";
import MainIndex from "./main/MainIndex";

// ----------------------------------------------------------------------
Home.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <MainIndex />
    </>
  );
}
