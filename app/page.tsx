import { Navbar } from "@/components/composition/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col   p-24">
      <div className="flex w-full justify-center">
        <Navbar />
      </div>
    </main>
  );
}
