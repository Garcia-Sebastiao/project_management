import { lazy } from "react";

const Layout = lazy(() =>
  import("../../../components/layout/Layout").then((module) => ({
    default: module.Layout,
  }))
);

export function ProjectsPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-primary">Projectos</h2>
        <span className="text-primaryText">Gerencie seus projectos.</span>
      </div>

      <div className="w-full">
        <div className="grid-cols-4 grid w-full p-4 rounded-xl bg-slate-100 mt-6">
          <span className="text-primaryText font-medium">Titulo</span>
          <span className="text-primaryText font-medium">Lider</span>
          <span className="text-primaryText font-medium">Prazo</span>
          <span className="text-primaryText font-medium">Status</span>
        </div>

        <div className="w-full flex-col gap-y-4">
          <a
            href=""
            className="transition duration-150 hover:bg-slate-50 hover:pointer flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2"
          >
            <span className="text-primaryText font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="text-primaryText font-medium">Lorem ipsum</span>
            <span className="text-primaryText font-medium">23/11/2023</span>
            <span className="text-primaryText font-medium">Em curso</span>
          </a>
          <a
            href=""
            className="transition duration-150 hover:bg-slate-50 hover:pointer flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2"
          >
            <span className="text-primaryText font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="text-primaryText font-medium">Lorem ipsum</span>
            <span className="text-primaryText font-medium">23/11/2023</span>
            <span className="text-primaryText font-medium">Em curso</span>
          </a>
          <a
            href=""
            className="transition duration-150 hover:bg-slate-50 hover:pointer flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2"
          >
            <span className="text-primaryText font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="text-primaryText font-medium">Lorem ipsum</span>
            <span className="text-primaryText font-medium">23/11/2023</span>
            <span className="text-primaryText font-medium">Em curso</span>
          </a>
          <a
            href=""
            className="transition duration-150 hover:bg-slate-50 hover:pointer flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2"
          >
            <span className="text-primaryText font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="text-primaryText font-medium">Lorem ipsum</span>
            <span className="text-primaryText font-medium">23/11/2023</span>
            <span className="text-primaryText font-medium">Em curso</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}
