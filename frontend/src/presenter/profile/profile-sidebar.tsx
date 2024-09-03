import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Link } from "react-router-dom";
import { menu } from "../page/vendor-profile";

function ProfileSideBar({menuList}:{menuList:menu[]}) {
  return (
    <div className="fixed flex flex-col gap-4 min-w-[300px] min-h-screen p-4 w-[300px] border-r">
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
