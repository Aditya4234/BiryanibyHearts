import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-100">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <h2 className="text-3xl font-bold text-slate-900">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
