import { menu } from "./vendor-profile";
import ProfileSideBar from "../profile/profile-sidebar";

const menuList: menu[] = [
  {
    group: "General",
    items: [
      { link: "/customer", text: "Profile Overview" },
      { link: "/customer", text: "Order History" },
      { link: "/customer", text: "Wishlist" },
      { link: "/customer", text: "Address" },
    ],
  },
  {
    group: "Setting",
    items: [
      { link: "/", text: "Account Setting" },
      { link: "/", text: "Help/Support" },
    ],
  },
];
const CustomerProfile = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
      <ProfileSideBar menuList={menuList} />
      <div className="ml-[200px]">View Port</div>
      </div>
    </div>
  );
};

export default CustomerProfile;
