import HeaderTitle from "@/components/HeaderTitle";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className=''>
      <Hero />
        <div className="w-full flex justify-center h-full">
          <HeaderTitle title={"Weekly Updates"} />
        </div>
    </main>
  );
}
