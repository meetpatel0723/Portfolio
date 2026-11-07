import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Loader2, AlertCircle } from "lucide-react";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
const CONFIGURED = !!ACCESS_KEY && ACCESS_KEY !== "your-access-key-here";

const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "E-commerce Store",
  "Landing Page",
  "Other",
] as const;

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
] as const;

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-text placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent/15";

const selectClass = cn(inputClass, "appearance-none cursor-pointer");

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CONFIGURED || status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMsg("");

    const name = String(data.get("name") ?? "");
    const projectType = String(data.get("project_type") ?? "");
    const budget = String(data.get("budget") ?? "");

    const message = [
      `Project type: ${projectType || "—"}`,
      `Budget: ${budget || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email: data.get("email"),
          subject: `Portfolio inquiry — ${projectType || "General"} (${budget || "no budget"})`,
          message,
          from_name: personal.name,
          botcheck: data.get("botcheck"),
        }),
      });
      const json = (await res.json()) as { success: boolean; message?: string };

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email me directly.");
    }
  };

  return (
    <div className="relative mx-auto mt-16 w-full max-w-2xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/[0.04] blur-3xl" aria-hidden="true" />

      <form
        onSubmit={handleSubmit}
        className="relative rounded-3xl border border-white/[0.08] bg-surface/80 p-6 backdrop-blur-sm md:p-10"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Name
            </label>
            <input id="cf-name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Email
            </label>
            <input id="cf-email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-project-type" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Project type
            </label>
            <select id="cf-project-type" name="project_type" className={selectClass} defaultValue="">
              <option value="" disabled className="bg-surface">
                Select…
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-surface">
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cf-budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Budget range
            </label>
            <select id="cf-budget" name="budget" className={selectClass} defaultValue="">
              <option value="" disabled className="bg-surface">
                Select…
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b} className="bg-surface">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="cf-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project, timeline, and goals…"
            className={cn(inputClass, "resize-none")}
          />
        </div>

        {/* Honeypot — invisible to humans, bots fill it and Web3Forms rejects the submission */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="mt-6 flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={!CONFIGURED || status === "loading"}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 font-medium text-bg transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_-8px_rgba(163,230,53,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-accent"
                role="status"
              >
                <Check className="h-4 w-4" />
                Message sent — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-red-400"
                role="alert"
              >
                <AlertCircle className="h-4 w-4" />
                {errorMsg}
              </motion.p>
            )}
            {!CONFIGURED && status === "idle" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-muted"
              >
                Add your Web3Forms key to <code className="rounded bg-white/10 px-1.5 py-0.5">.env</code> to enable the form.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
