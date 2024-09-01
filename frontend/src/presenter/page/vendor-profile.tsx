import ProfileHeader from "../profile/profile-header";
import ProfileSideBar from "../profile/profile-sidebar";
import { Outlet } from "react-router-dom";

const VendorProfile = () => {
  return (
    <div className="w-screen px-[200px] flex flex-col items-center justify-center">
      <ProfileHeader />
      <div className="flex w-full relative mt-[130px]">
        <ProfileSideBar />
        <div className="ml-[300px] flex flex-col gap-2 grow p-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
