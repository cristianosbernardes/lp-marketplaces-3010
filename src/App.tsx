import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));
const ListaDeEspera = lazy(() => import("./pages/ListaDeEspera"));

const App = () => (
  <LazyMotion features={domAnimation} strict>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* LP guardada para a próxima turma; a raiz redireciona para a lista (vercel.json) */}
          <Route path="/lp" element={<Index />} />
          <Route path="/lista-de-espera" element={<ListaDeEspera />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </LazyMotion>
);

export default App;
