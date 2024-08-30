import { useState } from "react"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "./ui/command"




function CommandDemo() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
<Command className="rounded-lg border shadow-sm">
  <CommandInput placeholder="Type a command or search..." />
  {isOpen && <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>}
</Command>

  )
}

export default CommandDemo
