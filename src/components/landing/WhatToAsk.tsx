import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <MessageCircleIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Conversations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers expert-level guidance trained
            on thousands of real dental cases
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Chat Examples */}
          <div className="space-y-10">
            <h3 className="text-xl md:text-2xl font-bold">
              Common questions our AI answers:
            </h3>

            {[ 
              {
                q: "My tooth hurts when I bite down",
                desc:
                  "Get immediate advice on pain management, possible causes, and when to see a dentist urgently",
                tags: ["Instant Response", "Pain Relief"],
              },
              {
                q: "How much does teeth whitening cost?",
                desc:
                  "Compare treatment options, pricing ranges, and find the best whitening solution for your budget",
                tags: ["Cost Analysis", "Treatment Options"],
              },
              {
                q: "When should I replace my filling?",
                desc:
                  "Learn about filling lifespan, warning signs of wear, and replacement timing guidance",
                tags: ["Preventive Care", "Maintenance"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquareIcon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                      <p className="font-semibold text-primary">"{item.q}"</p>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Illustration */}
          <div className="order-first lg:order-last bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-border/50 transition-all duration-300 hover:border-primary/30">
            <div className="flex items-center justify-center">
              <Image
                src="/confused.png"
                alt="AI Dental Assistant Illustration"
                width={500}
                height={500}
                className="hidden lg:block w-full max-w-md object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
