import ProfileHeader from "../profile/profile-header";
import ProfileSideBar from "../profile/profile-sidebar";
import { Outlet } from "react-router-dom";

export type menu = {
  group: string;
  items: { link: string; text: string; icon?: string }[];
};

const VendorProfile = () => {
  const menuList: menu[] = [
    {
      group: "General",
      items: [
        { link: "/vendor", text: "Product Mangement" },
        { link: "/", text: "Orders" },
        { link: "/", text: "Reviews & Feedback" },
      ],
    },
    {
      group: "Setting",
      items: [
        { link: "/", text: "Profile Setting" },
        { link: "/", text: "Privacy" },
      ],
    },
  ];

  return (
    <div className="w-screen px-[200px] flex flex-col items-center justify-center">
      <ProfileHeader />
      <div className="flex w-full relative mt-[130px]">
        <ProfileSideBar menuList={menuList} />
        <div className="ml-[300px] flex flex-col gap-2 grow p-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
