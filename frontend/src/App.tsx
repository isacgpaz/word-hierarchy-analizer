import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <div className="h-dvh overflow-auto bg-slate-950 p-12 flex flex-col">
      <Header />

      <main className="flex-1">a</main>

      <Footer />
    </div>
  );
}

export default App;
