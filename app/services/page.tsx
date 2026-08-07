import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
import { wa, CONFIG } from "@/lib/config";
import { ShieldCheck } from "lucide-react";

export const metadata = { title: "Our Services — THE DIET HUB Kadapa" };

export default function Services() {
  return (
    <div className="mx-auto w-[min(1080px,94%)] py-14">
      <Reveal>
        <p className="eyebrow mb-3">Our services</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">మా సేవలు</h1>
        <p className="mt-2 text-xl font-semibold text-leaf-deep dark:text-leaf">Our services</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
          ఆరోగ్యకరమైన జీవితం కోసం సరైన ఆహారమే మొదటి అడుగు. We start with a free assessment, then
          build a plan around your body, your routine and your health condition. Twelve services,
          one method — nothing off a template.
        </p>
      </Reveal>

      <div className="mt-12 space-y-px overflow-hidden rounded-xl border border-line bg-line">
        {SERVICES.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.05}>
            <article className="grid gap-4 bg-surface p-7 sm:grid-cols-[auto_1fr] sm:gap-7">
              <span className="font-num grid size-12 shrink-0 place-items-center rounded-lg bg-leaf-soft text-lg text-leaf-deep dark:bg-white/6 dark:text-leaf">
                {s.no}
              </span>
              <div>
                <h2 className="font-display text-xl font-bold leading-snug">{s.title}</h2>
                <p className="mt-1 text-[17px] font-semibold text-leaf-deep dark:text-leaf">{s.titleTe}</p>
                <p className="mt-3 leading-relaxed text-ink-soft dark:text-muted-fg">{s.body}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{s.bodyTe}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 rounded-xl border border-leaf/30 bg-leaf-soft/70 p-8 text-center dark:bg-white/4">
          <ShieldCheck size={26} strokeWidth={1.75} className="mx-auto text-leaf" />
          <h2 className="font-display mt-4 text-2xl font-bold">Start with a free assessment</h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-ink-soft dark:text-muted-fg">
            Tell us your age, weight, routine and any health condition. We will suggest the right
            plan — no pressure to buy anything.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={wa("Hi The Diet Hub! I'd like a free health assessment.")} target="_blank" rel="noopener noreferrer">
              <Button variant="wa" size="lg">Message on WhatsApp</Button>
            </a>
            <a href={`tel:+${CONFIG.whatsapp}`}>
              <Button variant="ghost" size="lg">Call {CONFIG.phoneDisplay}</Button>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
