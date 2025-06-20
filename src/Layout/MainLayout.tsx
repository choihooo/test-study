import { Outlet } from "react-router-dom";
import Header from "@src/components/Header";

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
