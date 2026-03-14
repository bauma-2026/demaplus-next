"use client";

import { useMemo, useState } from "react";

const TO_EMAIL = "info@demaplus.si";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `Povpraševanje – ${name || "Kontakt"}`
    const body = [
      `Ime: ${name}`,
      `E-pošta: ${email}`,
      `Telefon: ${phone}`,
      "",
      "Sporočilo:",
      message,
    ].join("\n");

    return `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [name, email, phone, message]);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="max-w-xl">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          Pošljite sporočilo
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Izpolnite obrazec. Odpre se vaš e-poštni odjemalec z že pripravljeno
          vsebino.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Ime in priimek">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-neutral-300"
            placeholder="Vaše ime"
          />
        </Field>

        <Field label="E-pošta">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="h-11 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-neutral-300"
            placeholder="ime@podjetje.si"
          />
        </Field>

        <Field label="Telefon (opcijsko)">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-neutral-300"
            placeholder="+386 ..."
          />
        </Field>

        <div className="hidden sm:block" />

        <Field label="Sporočilo" className="sm:col-span-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[140px] w-full resize-y rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-300"
            placeholder="Kratek opis projekta, lokacija, okvirni rok ..."
          />
        </Field>

        <div className="sm:col-span-2 mt-2 flex items-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
          >
            Pošlji →
          </a>

          <p className="text-xs text-neutral-500">
            (Če želiš “pravi submit” brez mail klienta, to kasneje zamenjava z
            Next.js API route / Resend.)
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={["block", className].join(" ")}>
      <span className="text-xs tracking-wide text-neutral-500">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}