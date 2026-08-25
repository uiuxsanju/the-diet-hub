import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONFIG, wa } from "@/lib/config";
import { SPECIALITIES } from "@/lib/data";
import {
  MapPin, Phone, Clock, Instagram, Mail, Leaf, CheckCircle2, Eye, Target, Store,
} from "lucide-react";

export const metadata = { title: "About — THE DIET HUB Kadapa" };

const WHY_US = [
  "Freshly prepared every day",
  "Balanced and nutritious meals",
  "High-quality ingredients",
  "Hygienic food preparation",
  "Affordable meal plans",
  "Friendly and reliable service",
];

export default function About() {
  return (
    <div className="mx-auto w-[min(1080px,94%)] py-14">
      {/* Hero */}
      <Reveal>
        <p className="eyebrow mb-3">About us</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">
          Welcome to THE DIET HUB — your trusted destination for healthy,
          fresh and nutritious meals.
        </h1>
        <p className="mt-4 text-xl font-semibold text-leaf-deep dark:text-leaf">
          {CONFIG.taglineTe}
        </p>
      </Reveal>

      {/* Intro + specialities */}
      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-8 border-t border-line pt-10 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-ink-soft dark:text-muted-fg">
            <p>
              At THE DIET HUB, our mission is to make healthy eating simple, delicious
              and affordable. We believe good nutrition is the key to a healthier and
              happier life.
            </p>
            <p>
              Every meal is freshly prepared using carefully selected ingredients, with
              a focus on quality, hygiene and balanced nutrition. We are committed to
              serving wholesome meals that help you reach your health goals without
              compromising on taste.
            </p>
            <p>
              Whether you&apos;re looking to lose weight, gain weight, maintain a
              healthy lifestyle, or simply enjoy nutritious food, THE DIET HUB offers
              meal plans designed to fit your needs.
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

      {/* Why choose us */}
      <Reveal delay={0.1}>
        <section className="mt-14 border-t border-line pt-12">
          <p className="eyebrow mb-3">Why choose us</p>
          <h2 className="font-display text-3xl font-bold">
            Healthy food, done properly.
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div key={item} className="card-surface flex items-center gap-3 p-5">
                <CheckCircle2 size={19} strokeWidth={1.75} className="shrink-0 text-leaf" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Vision & Mission */}
      <Reveal delay={0.12}>
        <section className="mt-14 border-t border-line pt-12">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-7">
              <Eye size={22} strokeWidth={1.75} className="text-leaf" />
              <h3 className="font-display mt-4 text-lg font-bold">Our vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                To inspire healthier lifestyles by making nutritious food accessible to
                everyone.
              </p>
            </div>
            <div className="card-surface p-7">
              <Target size={22} strokeWidth={1.75} className="text-leaf" />
              <h3 className="font-display mt-4 text-lg font-bold">Our mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                To serve fresh, delicious and balanced meals that support the health
                and well-being of our community.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Founder */}
      <Reveal delay={0.14}>
        <section className="mt-14 border-t border-line pt-12">
          <div className="text-center">
            <p className="eyebrow mb-3">Meet the founder</p>
            <h2 className="font-display text-3xl font-bold">
              The person behind the kitchen.
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-8 sm:grid-cols-[220px_1fr]">
            <div className="mx-auto text-center sm:mx-0 sm:text-left">
              <img
                src="/images/founder-sravani.png"
                alt="Uppala Sravani, Founder of THE DIET HUB"
                className="mx-auto w-48 sm:mx-0 sm:w-full"
              />
              <p className="font-display mt-4 text-lg font-bold">Uppala Sravani</p>
              <p className="text-sm text-muted-fg">Founder &amp; Owner</p>
            </div>

            <div className="card-surface p-7 sm:p-9">
              <span aria-hidden="true" className="font-display block text-5xl leading-none text-leaf/30">
                &ldquo;
              </span>
              <p className="font-display -mt-3 text-lg leading-relaxed text-ink sm:text-xl dark:text-fg">
                Every plan we make begins with a conversation, not a chart — because
                no two bodies, and no two appetites, are the same. I taste every menu
                myself before it reaches you, and that will never change no matter
                how big we grow.
              </p>
              <p className="mt-5 text-sm font-semibold text-leaf-deep dark:text-leaf">
                — Uppala Sravani, Founder
              </p>
            </div>
          </div>

          <div className="card-surface mt-8 flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <Store size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
              <div>
                <h3 className="font-display text-lg font-bold">Franchise opportunities open</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-fg">
                  THE DIET HUB is expanding beyond Kadapa. If you&apos;d like to bring the
                  same natural, cooked-fresh diet food to your city, we&apos;d love to talk.
                </p>
              </div>
            </div>
            <a
              href={wa("Hi The Diet Hub! I'm interested in a franchise opportunity.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="wa" size="lg">Enquire about franchise</Button>
            </a>
          </div>
        </section>
      </Reveal>

      {/* Tagline banner */}
      <Reveal delay={0.16}>
        <div className="mt-14 border-t border-line pt-10 text-center">
          <p className="font-display text-xl font-bold sm:text-2xl">
            THE DIET HUB <span className="text-leaf">·</span> Eat Healthy. Live Better.
          </p>
        </div>
      </Reveal>

      {/* Visit us */}
      <Reveal delay={0.18}>
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