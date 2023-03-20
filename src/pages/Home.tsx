import SideBar from "../components/SideBar";
import Welcome from "../components/Welcome";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <div>
      <SideBar />
      <Welcome />
    </div>
  );
};

export default HomePage;
