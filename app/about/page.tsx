import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONFIG, wa } from "@/lib/config";
import { SPECIALITIES } from "@/lib/data";
import { MapPin, Phone, Clock, Instagram, Mail, Leaf, ShieldCheck, Users } from "lucide-react";

export const metadata = { title: "About — THE DIET HUB Kadapa" };

const VALUES = [
  { Icon: Leaf, t: "Natural, always", p: "No chemicals, no preservatives, no colour. Fresh ingredients bought and cooked the same day." },
  { Icon: ShieldCheck, t: "Guided by science", p: "Plans follow nutrition principles, not fad diets or crash cycles." },
  { Icon: Users, t: "For every age", p: "Children, working adults, expecting mothers and elders — the plan changes, the care doesn't." },
];

export default function About() {
  return (
    <div className="mx-auto w-[min(1080px,94%)] py-14">
      <Reveal>
        <p className="eyebrow mb-3">About us</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">
          Good food… good health… good life.
        </h1>
        <p className="mt-4 text-xl font-semibold text-leaf-deep dark:text-leaf">
          {CONFIG.taglineTe}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-8 border-t border-line pt-10 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-ink-soft dark:text-muted-fg">
            <p>
              THE DIET HUB started in Kadapa with one belief: healthy eating should not mean bland
              food, expensive powders or a diet you abandon in a week.
            </p>
            <p>
              We begin every relationship with a free health assessment — your age, weight, height,
              routine, medical history and what you actually enjoy eating. Only then do we build a
              plan. That plan gets cooked fresh in our kitchen with low oil, low spice and honest
              portions, and it changes as your body changes.
            </p>
            <p>
              Alongside the meal plans we make cold-pressed juices and workout smoothies daily —
              the same rule applies to all of it: nothing added that does not belong.
            </p>
          </div>

          <div className="card-surface p-7">
            <h2 className="font-display text-xl font-bold">Our specialities</h2>
            <ul className="mt-4 space-y-2.5">
              {SPECIALITIES.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <Leaf size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-leaf" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {VALUES.map(({ Icon, t, p }, i) => (
          <Reveal key={t} delay={i * 0.06}>
            <div className="card-surface h-full p-6">
              <Icon size={22} strokeWidth={1.75} className="text-leaf" />
              <h3 className="font-display mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <section className="mt-14 border-t border-line pt-12">
          <p className="eyebrow mb-3">Visit us</p>
          <h2 className="font-display text-3xl font-bold">Come and talk to us.</h2>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span>{CONFIG.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span>{CONFIG.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span className="font-num">
                  <a className="hover:text-leaf" href={`tel:+${CONFIG.whatsapp}`}>{CONFIG.phoneDisplay}</a>
                  <br />
                  <a className="hover:text-leaf" href={`tel:+${CONFIG.whatsapp2}`}>{CONFIG.phoneDisplay2}</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Instagram size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <a className="hover:text-leaf" href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">
                  {CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <a className="break-all hover:text-leaf" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
              </li>
            </ul>

            <div className="photo-mount min-h-[320px]">
              <iframe
                title="The Diet Hub location"
                src={CONFIG.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
              />
            </div>
          </div>

          <a href={wa("Hi The Diet Hub! I'd like to know more.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block">
            <Button variant="wa" size="lg">Message us on WhatsApp</Button>
          </a>
        </section>
      </Reveal>
    </div>
  );
}
