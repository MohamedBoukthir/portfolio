import { ContactForm } from "@/components/contact-form";
import BlurFade from "@/components/magicui/blur-fade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamed Boukthir for web development, cybersecurity, or collaboration opportunities.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with Mohamed Boukthir for web development, cybersecurity, or collaboration opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Get in touch with Mohamed Boukthir for web development, cybersecurity, or collaboration opportunities.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
  return (
    <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Contact</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Get in touch with ME
        </p>
      </BlurFade>
      <ContactForm/>
    </section>
  );
}
