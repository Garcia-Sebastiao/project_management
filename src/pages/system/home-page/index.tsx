import { Layout } from "../../../components/layout/Layout";
import { CounterCard } from "../../../components/common/Card/CounterCard";

export function HomePage() {
  return (
    <Layout className="overflow-y-auto gap-y-12">
      <div className="w-full flex justify-between items-center pb-8 border-b-2 border-border  ">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-primary">Seja bem vindo</h2>
          <span className="text-primaryText">
            Prepare-seu ambiente de trabalho e gerencie sua equipe.
          </span>
        </div>

        <a href="" className="p-4 rounded-md bg-primar text-sm text-white">Ver projectos</a>
      </div>

      <div className="w-full grid grid-cols-3 gap-x-6">
        <CounterCard title="Projectos Levantados" count={15} />
        <CounterCard title="Projectos Pendentes" count={5} />
        <CounterCard title="Projectos Concluidos" count={6} />
      </div>

      <div className="w-full grid grid-cols-3 gap-11">
        <div className="w-full rounded-xl col-span-2">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">Projectos</h3>

            <a href="" className="text-primary font-medium">
              Ver todos
            </a>
          </div>

          <div className="w-full">
            <div className="grid-cols-4 grid w-full p-4 rounded-xl bg-zinc-100 mt-6">
              <span className="text-primaryText font-medium">Titulo</span>
              <span className="text-primaryText font-medium">Lider</span>
              <span className="text-primaryText font-medium">Prazo</span>
              <span className="text-primaryText font-medium">Status</span>
            </div>

            <div className="w-full flex-col gap-y-4">
              <div className=" flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2">
                <span className="text-primaryText font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="text-primaryText font-medium">
                  Lorem ipsum
                </span>
                <span className="text-primaryText font-medium">23/11/2023</span>
                <span className="text-primaryText font-medium">Em curso</span>
              </div>

              <div className=" flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2">
                <span className="text-primaryText font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="text-primaryText font-medium">
                  Lorem ipsum
                </span>
                <span className="text-primaryText font-medium">23/11/2023</span>
                <span className="text-primaryText font-medium">Em curso</span>
              </div>

              <div className=" flex-col grid grid-cols-4 place-items-left place-content-center items-center gap-4 rounded-xl border-border mt-4 p-4 border-2">
                <span className="text-primaryText font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="text-primaryText font-medium">
                  Lorem ipsum
                </span>
                <span className="text-primaryText font-medium">23/11/2023</span>
                <span className="text-primaryText font-medium">Em curso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl">
          <div className="flex w-full  items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">Membros</h3>

            <a href="" className="text-primary font-medium">
              Ver todos
            </a>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="p-4 rounded-xl border-border border-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-zinc-200"></div>
                <div className="flex flex-col">
                  <span className="text-primary">Joana Mayamona</span>
                  <small className="text-primaryText">joana@gmial.com</small>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border-border border-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-zinc-200"></div>
                <div className="flex flex-col">
                  <span className="text-primary">Joana Mayamona</span>
                  <small className="text-primaryText">joana@gmial.com</small>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border-border border-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-zinc-200"></div>
                <div className="flex flex-col">
                  <span className="text-primary">Joana Mayamona</span>
                  <small className="text-primaryText">joana@gmial.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
