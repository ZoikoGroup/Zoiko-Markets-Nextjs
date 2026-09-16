import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Zoiko Markets",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col gap-6 px-4 py-24 sm:px-6">
      <h1 className="text-2xl font-semibold text-brand-dark">Log in</h1>
      <p className="text-sm text-brand-dark/70">Placeholder page — build out the sign-in form here.</p>
    </section>
  );
}
