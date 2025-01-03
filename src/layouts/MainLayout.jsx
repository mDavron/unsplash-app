import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
function MainLayout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default MainLayout;
