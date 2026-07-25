/**
 * Minimal API client for the ONLY real functionality the marketing site keeps:
 * password reset (Step 13). Both endpoints are unauthenticated, so there's no
 * token/refresh plumbing — that (and every other endpoint) left with the app.
 */

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

/** A non-2xx response. `status` drives the message the reset pages show. */
export class ApiError extends Error {
  readonly status: number;
  readonly detail: string | null;
  constructor(status: number, detail: string | null) {
    super(detail || `Request failed with status ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.detail = detail;
  }
}

/** The request never reached the API (server down, CORS, offline). */
export class NetworkError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "NetworkError";
  }
}

async function post<T>(path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (cause) {
    throw new NetworkError(`Could not reach the API at ${API_BASE_URL}.`, { cause });
  }
  if (!res.ok) {
    let detail: string | null = null;
    try {
      const data = await res.json();
      const d = data?.detail;
      detail = typeof d === "string" ? d : d ? JSON.stringify(d) : null;
    } catch {
      detail = null;
    }
    throw new ApiError(res.status, detail);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

/** Request a reset email. Always resolves 200 — the server never reveals whether
 *  the address is registered. */
export function forgotPassword(email: string): Promise<{ ok: boolean }> {
  return post<{ ok: boolean }>("/auth/forgot-password", { email });
}

/** Complete a reset with the emailed token + a new password. */
export function resetPassword(
  token: string,
  newPassword: string,
): Promise<{ ok: boolean }> {
  return post<{ ok: boolean }>("/auth/reset-password", { token, newPassword });
}
