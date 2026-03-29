import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="text-center max-w-xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
