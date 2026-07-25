"use client";

/**
 * Request a password reset. The server always 200s (it never reveals whether an
 * email is registered), so on success we show the same calm "check your email"
 * message regardless.
 */

import { useState } from "react";
import Link from "next/link";
import { Field } from "@/components/Field";
import { ApiError, forgotPassword } from "@/lib/api";

const ERROR_COLOR = "#b5553c";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setError(null);
    setBusy(true);
    try {
      await forgotPassword(email.trim());
      setSent(true);
    } catch (err) {
      setError(
        err instanceof ApiError && err.status === 429
          ? "Too many requests — please wait a little and try again."
          : "Couldn’t reach the server. Try again in a moment.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="font-serif text-ink text-3xl">Reset password</h1>

      {sent ? (
        <>
          <p className="text-secondary mt-4 text-sm leading-relaxed">
            If an account exists for{" "}
            <span className="text-ink">{email.trim()}</span>, we’ve sent a link to
            reset your password. It expires in 30 minutes.
          </p>
          <Link
            href="/"
            className="text-secondary hover:text-ink mt-8 inline-block text-sm underline underline-offset-4 transition-colors"
          >
            Back to vournal
          </Link>
        </>
      ) : (
        <>
          <p className="text-secondary mt-2 text-sm">
            Enter your email and we’ll send a reset link.
          </p>
          <form onSubmit={submit} className="mt-10 space-y-4">
            <Field
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
              autoFocus
            />
            {error && (
              <p className="text-sm" style={{ color: ERROR_COLOR }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={busy || !email.trim()}
              className="border-hairline text-ink hover:border-faint w-full cursor-pointer rounded-full border py-2.5 text-sm transition-colors disabled:cursor-default disabled:opacity-40"
            >
              {busy ? "…" : "Send reset link"}
            </button>
          </form>
          <p className="text-muted mt-8 text-sm">
            Reset your password here, then sign in from the vournal app.{" "}
            <Link
              href="/"
              className="text-secondary hover:text-ink underline underline-offset-4 transition-colors"
            >
              Back to vournal
            </Link>
          </p>
        </>
      )}
    </main>
  );
}
