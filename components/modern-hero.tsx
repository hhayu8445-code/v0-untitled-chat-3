import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ModernHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[hsl(330,100%,65%)]/30 glass-effect p-8">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(330,100%,65%)] to-[hsl(300,100%,70%)] bg-clip-text text-transparent mb-4">
            FiveM Tools V7
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The ultimate platform for FiveM resources. Scripts, MLOs, vehicles, and more - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[hsl(330,100%,65%)] hover:bg-[hsl(330,100%,55%)] text-white rounded-full px-6 py-6 text-base holographic-2025">
              Browse Resources
            </Button>
            <Button variant="outline" className="border-[hsl(330,100%,65%)] text-[hsl(330,100%,65%)] rounded-full px-6 py-6 text-base hover:bg-[hsl(330,100%,65%)]/10">
              Join Discord
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[hsl(330,100%,65%)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-[hsl(300,100%,70%)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}