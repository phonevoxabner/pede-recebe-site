import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconCheck, IconX, IconMinus } from "@/components/ui/icons";

const FEATURES = [
  "API Oficial WhatsApp",
  "Sem risco de bloqueio",
  "Funciona no navegador",
  "Independente do iFood",
  "Cardápio digital",
  "Painel de pedidos",
  "Atendimento centralizado",
  "Financeiro integrado",
  "Gestão de entregas",
  "Programa de fidelidade",
  "Cupons de desconto",
  "Controle de estoque",
  "Pagamento online",
  "Suporte humano",
];

type CellValue = "yes" | "no" | "partial";

const DATA: Record<string, CellValue[]> = {
  pederecebe: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
  saipos:     ["no",  "no",  "no",  "yes", "yes", "yes", "no",  "partial","no", "no",  "no",  "no",  "yes", "partial"],
  anotaai:    ["no",  "no",  "no",  "no",  "yes", "yes", "yes", "no",  "no",  "no",  "no",  "no",  "partial","partial"],
};

function Cell({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-verde/15 flex items-center justify-center">
          <IconCheck size={14} color="#22C55E" />
        </div>
      </div>
    );
  if (value === "no")
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-vermelho/10 flex items-center justify-center">
          <IconX size={14} color="#EF4444" />
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
        <IconMinus size={14} color="#F5A623" />
      </div>
    </div>
  );
}

const NOVOS_INDICES = [7, 8, 9, 10, 11];

export default function Comparativo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Comparativo</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Como nos comparamos
            <br />
            <span className="text-amarelo">com a concorrência</span>
          </h2>
        </div>

        <div className="reveal">
          <div className="bg-cinza-escuro rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/40 text-sm font-medium w-1/2">
                    Recurso
                  </th>
                  <th className="py-4 px-3 text-sm font-bold">
                    <div className="text-amarelo font-condensed text-base">Pede&amp;Recebe</div>
                  </th>
                  <th className="py-4 px-3 text-sm font-medium text-white/40">Saipos</th>
                  <th className="py-4 px-3 text-sm font-medium text-white/40">
                    Anota AI
                    <div className="text-[10px] font-normal text-white/25 mt-0.5">(iFood)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 last:border-0 ${
                      i % 2 === 0 ? "" : "bg-white/[0.02]"
                    } ${NOVOS_INDICES.includes(i) ? "bg-amarelo/[0.03]" : ""}`}
                  >
                    <td className="py-3.5 px-6 text-sm text-white/70 flex items-center gap-2">
                      {feature}
                      {NOVOS_INDICES.includes(i) && (
                        <span className="text-[9px] font-bold text-amarelo bg-amarelo/15 border border-amarelo/25 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                          Exclusivo
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3"><Cell value={DATA.pederecebe[i]} /></td>
                    <td className="py-3.5 px-3"><Cell value={DATA.saipos[i]} /></td>
                    <td className="py-3.5 px-3"><Cell value={DATA.anotaai[i]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/25 text-xs text-center mt-4">
            Baseado em informações públicas dos fornecedores — Jun/2025
          </p>
          <SectionCTA
            texto="A escolha é clara. Sem iFood, sem bloqueio."
            botao="Começar com o Pede&Recebe"
          />
        </div>
      </div>
    </section>
  );
}
