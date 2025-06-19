export const LoadingState = () => {
  return (
    <div className="text-center w-full h-full flex flex-col items-center justify-center ">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600 mx-auto"></div>
      <h2 className="text-zinc-900 tracking-tighter font-medium dark:text-white mt-4">
        Warming up the AI engines...
      </h2>
      <p className="text-zinc-600 text-sm mt-2 dark:text-zinc-400">
        Getting everything ready for your next-level collaboration.
      </p>
    </div>
  );
};
