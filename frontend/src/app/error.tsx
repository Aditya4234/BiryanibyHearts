"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-100">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-extrabold text-primary">Oops!</h1>
        <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
