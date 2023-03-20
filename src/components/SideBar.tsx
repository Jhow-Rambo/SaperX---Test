import { FunctionComponent } from "react";
import logo from "../logo.png";
import profile from "../profile-pic.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBar: FunctionComponent = () => {
  return (
    <div className="w-32 h-screen left-0 bg-[#F8F9FB] items-center flex flex-col py-6 justify-between">
      <div className="flex flex-col items-center w-full">
        <img src={logo} alt="" width={32} height={32} className="mb-10"></img>
        <div className="flex flex-col items-center space-y-7">
          <p className="text-[#64748B] font-medium">Menu</p>
          <DashboardIcon className="cursor-pointer text-[#434343]" />
          <PersonAddAltIcon className="cursor-pointer text-[#434343]" />
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
