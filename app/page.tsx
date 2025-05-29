import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header Logo */}
      <header className="w-full flex justify-between items-center">
        <Image src="/uae-pass-logo.svg" alt="UAE PASS Logo" width={120} height={40} />
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </Link>
      </header>

      {/* Main Content */}
      <main className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Welcome to UAE PASS Auth Demo</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          This is a proof of concept application demonstrating integration with UAE PASS authentication in the staging environment.
        </p>
        <Link
          href="/login"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} UAE PASS Demo App. All rights reserved.
      </footer>
    </div>
  );
}
