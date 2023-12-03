import { ListIcon } from "../../assets/icons/ListIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { Sidebar } from "./Sidebar";

export function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="w-full h-screen flex">
      <Sidebar />

      <main className="w-full flex-1 flex flex-col">
        <header className="w-full border-b-2 border-border flex items-center justify-between px-12">
          <ul className="flex items-center gap-x-12">
            <li className="py-8 text-primaryText flex items-center gap-x-4 transition duration-150 hover:text-base">
              {ListIcon}Lista
            </li>
            <li className="py-8 text-primaryText flex items-center gap-x-4 transition duration-150 hover:text-base">
              <span className="rotate-90">{ListIcon}</span>Quadro
            </li>
          </ul>

          <div className="flex items-center gap-x-7">
            <form action="">
              <div className="flex items-center gap-x-4 bg-zinc-100 rounded-md px-3">
                <input
                  type="text"
                  placeholder="Pesquisar projecto..."
                  className="flex-1 py-3 bg-transparent text-primaryText outline-none"
                />
                {SearchIcon}
              </div>
            </form>

            <button>{NotificationIcon}</button>

            <div className="w-12 h-12 rounded-full bg-zinc-300"></div>
          </div>
        </header>

        <div className={`flex-1 p-12 flex flex-col gap-8 ${className}`}>
          {children}
        </div>
      </main>
    </main>
  );
}
