import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* GLOW ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* HEADING */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block text-foreground">
                    Your dental
                  </span>
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <span className="block text-foreground">
                    answered instantly
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Chat with our AI dental assistant for instant advice, book smart
                  appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    <MicIcon className="mr-2 h-5 w-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* SOCIAL PROOF */}
              <div className="pt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "1544005313-94ddf0286df2",
                    "1560250097-0b93528c311a",
                    "1580489944761-15a19d654956",
                    "1633332755192-727a05c4013d",
                    "1598300042247-d088f8ab3a91",
                  ].map((id, i) => (
                    <Image
                      key={i}
                      src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop&crop=face`}
                      alt="User"
                      width={48}
                      height={48}
                      className="rounded-full ring-4 ring-background"
                    />
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-sm font-bold">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-semibold text-foreground">1,200+ patients</span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT – HERO IMAGE */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl blur-xl rotate-45" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />

              <Image
                src="/hero.png"
                alt="DentQueue "
                width={600}
                height={600}
                priority
                className="w-full max-h-[80vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
