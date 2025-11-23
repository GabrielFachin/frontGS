import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
import { lazy, Suspense } from "react";

const OutletsPage = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Cabecalho />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400">Carregando...</p>
              </div>
            </div>
          }
        >
          <OutletsPage />
        </Suspense>
      </main>

      <Rodape />
    </div>
  );
}