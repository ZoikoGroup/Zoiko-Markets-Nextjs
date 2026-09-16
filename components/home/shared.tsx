import Image from "next/image";
import { ScrollReveal } from "@/components/shared";

type ImageBannerProps = {
  src: string;
  alt: string;
  caption: string;
};

/** Full-bleed photo with a caption strip beneath it — reused for the infrastructure and team banners. */
export function ImageBanner({ src, alt, caption }: ImageBannerProps) {
  return (
    <ScrollReveal as="section">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 border-b border-brand-dark/10 bg-background px-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <p className="max-w-xl text-base font-medium text-brand-dark">{caption}</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
          Zoiko Markets
        </p>
      </div>
    </ScrollReveal>
  );
}
