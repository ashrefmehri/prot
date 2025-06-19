import { AlertTriangle } from "lucide-react";

export const ErrorState = () => {
  return (
    <div className="text-center w-full h-full flex flex-col items-center justify-center">
      <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
      <h2 className="text-zinc-900 tracking-tighter font-medium dark:text-white mt-4">
        Oops! Something went wrong.
      </h2>
      <p className="text-zinc-600 text-sm mt-2 dark:text-zinc-400">
        Don't worry, we're already fixing it. Try again in a moment.
      </p>
    </div>
  );
};