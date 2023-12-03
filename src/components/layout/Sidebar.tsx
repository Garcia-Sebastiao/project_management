import { Logo } from "../../assets/Logo";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { CheckedIcon } from "../../assets/icons/CheckedIcon";
import { AddIcon } from "../../assets/icons/AddIcon";
import { BackIcon } from "../../assets/icons/BackIcon";

export function Sidebar() {
  return (
    <aside className="h-screen flex-1 max-w-[280px] border-r-2 border-border">
      <div className="flex items-center justify-between p-7  w-full border-b-2 border-border">
        {Logo}

        <button>{BackIcon}</button>
      </div>

      <nav className="w-full px-[18px] py-7 border-b-2 border-border">
        <ul className="w-full flex-col">
          <li className="">
            <a
              href=""
              className="text-primaryText p-[10px] w-full hover:bg-gray-100 transition duration-150 rounded-md flex items-center gap-x-4"
            >
              {HomeIcon}Home
            </a>
          </li>

          <li className="">
            <a
              href=""
              className="text-primaryText p-[10px] w-full hover:bg-gray-100 transition duration-150 rounded-md flex items-center gap-x-4"
            >
              {CheckedIcon}Minhas Tarefas
            </a>
          </li>

          <li className="">
            <a
              href=""
              className="text-primaryText p-[10px] w-full hover:bg-gray-100 transition duration-150 rounded-md flex items-center gap-x-4"
            >
              {UserIcon}Membros
            </a>
          </li>
        </ul>
      </nav>

      <div className="w-full p-7">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-sm text-primaryText font-semibold">Projectos</h3>

          <button>{AddIcon}</button>
        </div>
      </div>
    </aside>
  );
}
