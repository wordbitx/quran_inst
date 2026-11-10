"use client";

import { useState } from "react";
import { COURSES } from "@/lib/data";
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-cardBorder bg-white px-4 py-3 text-[16px] text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20";

/**
 * Free-trial form — same behaviour as the previous site: on submit it opens
 * WhatsApp (wa.me/923056622104) with the details pre-filled, and shows the
 * confirmation note. Nothing is stored on any server.
 */
export default function TrialForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [studentType, setStudentType] = useState("Kid");
  const [course, setCourse] = useState(defaultCourse);
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter the parent / student name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter a WhatsApp number.");
      return;
    }
    setError("");
    const lines = [
      "Assalamu Alaikum! I want to book the 3-Day FREE Trial Classes at Quran Light Institute.",
      "",
      `Name: ${name.trim()}`,
      `WhatsApp Number: ${phone.trim()}`,
      `Classes For: ${studentType}`,
      `Course: ${course || "Not sure — please guide us"}`,
    ];
    if (age.trim()) lines.push(`Student Age: ${age.trim()}`);
    if (time.trim()) lines.push(`Preferred Time: ${time.trim()}`);
    if (message.trim()) lines.push(`Message: ${message.trim()}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    setDone(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-cardBorder bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-extrabold text-navyDark">Book Your 3-Day FREE Trial</h2>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
        Fill in the form — it opens WhatsApp with your details ready to send to{" "}
        <strong className="text-navyDark">{PHONE_DISPLAY}</strong>.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-navyDark">Parent / Student Name *</span>
          <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-navyDark">WhatsApp Number *</span>
          <input className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+92 ..." inputMode="tel" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-navyDark">Student Age</span>
          <input className={inputCls} value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 8" inputMode="numeric" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-navyDark">Classes For</span>
          <select className={inputCls} value={studentType} onChange={(e) => setStudentType(e.target.value)}>
            <option>Kid</option>
            <option>Adult</option>
            <option>Both kids &amp; adults</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-bold text-navyDark">Course</span>
          <select className={inputCls} value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Not sure — please guide us</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-bold text-navyDark">Preferred Class Time / Time Zone</span>
          <input className={inputCls} value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. 6pm PKT / 7pm UK time" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-bold text-navyDark">Anything Else? (optional)</span>
          <textarea className={inputCls} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>

      {error ? <p className="mt-4 rounded-xl bg-redSoft px-4 py-3 text-sm font-bold text-redDark">{error}</p> : null}
      {done ? (
        <p className="mt-4 rounded-xl bg-[#e7f9ee] px-4 py-3 text-sm font-bold text-[#0d6e35]">
          Jazakumullah khairan! WhatsApp should now be open with your trial request — just press
          send there. If it did not open, message us directly on {PHONE_DISPLAY}.
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-trial mt-6 w-full rounded-full bg-brandRed px-6 py-4 text-lg text-white shadow-card transition hover:bg-redDark"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
