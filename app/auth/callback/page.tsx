import { redirect } from 'next/navigation';

export default function CallbackPage({
  searchParams,
}: {
  searchParams?: { code?: string };
}) {
  const code = searchParams?.code;

  if (!code) {
    return <p>Missing code</p>;
  }

  redirect(`/exchange-token?code=${code}`);
}
