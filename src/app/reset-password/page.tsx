"use client";

/**
 * Set a new password from an emailed reset link (?token=...). On success every
 * other session is signed out (the backend revokes all refresh tokens). The
 * token-reading part is wrapped in Suspense — Next requires that for
 * useSearchParams.
 */

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Field } from "@/components/Field";
import { ApiError, resetPassword } from "@/lib/api";

/** Direction A mood-1 red, for the one error line (kept off the shared palette
 *  module, which left with the app). */
const ERROR_COLOR = "#b5553c";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetForm />
    </Suspense>
  );
}

function ResetForm() {
  const token = useSearchParams().get("token") ?? "";
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setError(null);
    setBusy(true);
    try {
      await resetPassword(token, password);
      setDone(true);
    } catch (err) {
      setBusy(false);
      if (err instanceof ApiError && err.status === 400) {
        setError("This reset link is invalid or has expired. Request a new one.");
      } else if (err instanceof ApiError && err.status === 422) {
        setError("Password must be at least 8 characters.");
      } else {
        setError("Couldn’t reach the server. Try again in a moment.");
      }
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="font-serif text-ink text-3xl">Set a new password</h1>

      {!token ? (
        <>
          <p className="text-secondary mt-4 text-sm leading-relaxed">
            This link is missing its token. Request a fresh reset from the sign-in
            screen.
          </p>
          <Link
            href="/forgot-password"
            className="text-secondary hover:text-ink mt-8 inline-block text-sm underline underline-offset-4 transition-colors"
          >
            Request a reset link
          </Link>
        </>
      ) : done ? (
        <>
          <p className="text-secondary mt-4 text-sm leading-relaxed">
            Your password has been reset, and every other session was signed out.
            You can sign in with your new password in the vournal app.
          </p>
          <Link
            href="/"
            className="text-secondary hover:text-ink mt-8 inline-block text-sm underline underline-offset-4 transition-colors"
          >
            Back to vournal
          </Link>
        </>
      ) : (
        <form onSubmit={submit} className="mt-10 space-y-4">
          <Field
            label="New password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
            autoFocus
          />
          <p className="text-faint text-xs">At least 8 characters.</p>
          {error && (
            <p className="text-sm" style={{ color: ERROR_COLOR }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy || password.length < 8}
            className="border-hairline text-ink hover:border-faint w-full cursor-pointer rounded-full border py-2.5 text-sm transition-colors disabled:cursor-default disabled:opacity-40"
          >
            {busy ? "…" : "Reset password"}
          </button>
        </form>
      )}
    </main>
  );
}
