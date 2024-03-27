import { Navbar } from "@/components/composition/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col  items-center p-10 pt-20">
      <div className="max-w-screen-2xl">
        <div className="grid grid-cols-3 w-full ">
          <div>
            <p>Logo</p>
          </div>
          <div className=" flex justify-center">
            <Navbar />
          </div>
          <div className="flex gap-2 justify-end">
            <Button size="lg" variant="secondary">
              Pedir Orçamento
            </Button>
          </div>
        </div>
        <div className="mt-36 flex justify-center flex-col gap-4 px-96">
          <p className="text-2xl text-slate-500 text-center font-semibold">
            Deixe conosco
          </p>
          <p className="text-4xl text-center font-extrabold leading-snug tracking-wide">
            Construção, Remodelação e Manutenção por profissionais
          </p>
        </div>
      </div>
    </main>
  );
}
