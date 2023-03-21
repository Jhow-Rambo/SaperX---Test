import { FunctionComponent } from "react";
import logo from "../logo.png";
import profile from "../profile-pic.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar: FunctionComponent = () => {

  const currentLocation = useLocation();

  const isInThisRoute = (route: string) => {
    return route === currentLocation.pathname && "bg-[#E7EAEE]";
  }
  return (
    <div className="md:w-32 w-20 h-full left-0 bg-[#F8F9FB] items-center flex flex-col py-6 justify-between absolute">
      <div className="flex flex-col items-center w-full">
        <Link to="/">
          <img src={logo} alt="" width={32} height={32} className="mb-10" />
        </Link>
        <div className="flex flex-col items-center space-y-7">
          <p className="text-[#64748B] font-medium">Menu</p>
          <div className={`w-full h-12 ${isInThisRoute("/contacts")} flex items-center justify-center rounded-md`}>
            <Link to="/contacts">
              <DashboardIcon className="cursor-pointer text-[#434343]" />
            </Link>
          </div>
          <div className={`w-full h-12 ${isInThisRoute("/create-contact")} flex items-center justify-center rounded-md`}>
            <Link to="/create-contact">
              <PersonAddAltIcon className="cursor-pointer text-[#434343]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center space-y-7">
        <NotificationsNoneIcon className="cursor-pointer text-[#434343]" />
        <SettingsIcon className="cursor-pointer text-[#434343]" />
        <div className="w-2/3 h-[2px] bg-[#D0D5DD]"></div>
        <p className="text-[#64748B] font-medium">Perfil</p>
        <img
          src={profile}
          alt=""
          width={32}
          height={32}
          className="cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default SideBar;
