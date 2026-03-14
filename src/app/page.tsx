import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar.jsx";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-full">
            <Hero />
          </div>
        </div>
      </main>
    </div>
  );
}
