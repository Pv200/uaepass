'use client'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const loginWithUAEPass = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: 'sandbox_stage',
      scope: 'urn:uae:digitalid:profile:general',
      redirect_uri: 'https://localhost:3000/callback',
      acr_values: 'urn:safelayer:tws:policies:authentication:level:low',
      state: 'abc123'
    });
    window.location.href = `https://stg-id.uaepass.ae/idshub/authorize?${params}`;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={loginWithUAEPass}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
      >
        Login with UAE PASS
      </button>
    </main>
  );
}
