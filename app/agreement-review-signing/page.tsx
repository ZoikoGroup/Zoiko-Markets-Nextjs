import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agreement Review & Signing | Zoiko Markets",
};

export default function AgreementReviewSigningPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-brand-dark">Agreement review & signing</h1>
      <p className="text-sm text-brand-dark/70">
        Placeholder page — build out the agreement review and e-signature flow here.
      </p>
    </section>
  );
}
