import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainTabs } from "./components/tabs";

function App() {
  return (
    <div className="min-h-dvh bg-slate-100 p-12 flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full my-6 flex flex-col">
        <MainTabs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
