import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./ui/command";
import UserItem from "./user-item";
import { Link } from "react-router-dom";
function SideNavbar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", text: "Vendor Table" },
        { link: "/customer", text: "Customer Table" },
      ],
    },
    {
      group: "Setting",
      items: [
        { link: "/", text: "General Setting" },
        { link: "/", text: "Privacy" },
        { link: "/", text: "Notification" },
      ],
    },
  ];
  return (
    <div className="fixed flex flex-col gap-4 min-w-[300px] min-h-screen p-4 w-[300px] border-r">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup heading={menu.group} key={key}>
                {menu.items.map((option: any, optionKey: any) => (
                  <Link to={option.link} key={optionKey}>
                    <CommandItem
                      key={optionKey}
                      className="flex gap-2 cursor-pointer"
                    >
                      {option.icon && option.icon}
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings /Notification</div>
    </div>
  );
}

export default SideNavbar;
