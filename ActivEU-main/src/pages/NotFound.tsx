import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/activeu/motion-primitives";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#f8fbff_100%)] px-4 py-16 text-slate-950 md:px-6">
      <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
        <FadeIn className="w-full rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-14">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Esta página não existe.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
            A rota que tentaste abrir não está disponível. O melhor próximo passo é voltar à homepage da ActivEU.
          </p>
          <a
            href="/"
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar à homepage
          </a>
        </FadeIn>
      </div>
    </main>
  );
}
