import { IconOptions } from "../icons/IconOptions";
import { IconPlus } from "../icons/IconPlus";

export function Toolbar() {
  return (
    <nav className="flex justify-end items-center w-full gap-2">
      <IconPlus />
      <IconOptions />
    </nav>
  );
}
