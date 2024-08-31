import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Link } from "react-router-dom";

function ProfileSideBar() {
  type menu = {
    group: string;
    items: { link: string; text: string; icon?: string }[];
  };
  const menuList: menu[] = [
    {
      group: "General",
      items: [
        { link: "/", text: "Product Mangement" },
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
    <div className="flex flex-col gap-4 min-w-[300px] min-h-screen p-4 w-[300px] border-r">
      <div></div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: menu, key: number) => (
              <CommandGroup heading={menu.group} key={key}>
                {menu.items.map(
                  (option: menu["items"][0], optionKey: number | string) => (
                    <Link to={option.link} key={optionKey}>
                      <CommandItem
                        key={optionKey}
                        className="flex gap-2 cursor-pointer"
                      >
                        {option.icon && option.icon}
                        {option.text}
                      </CommandItem>
                    </Link>
                  )
                )}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}

export default ProfileSideBar;
