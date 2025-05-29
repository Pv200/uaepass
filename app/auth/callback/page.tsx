import { redirect } from 'next/navigation';

export default function CallbackPage({ searchParams }: { searchParams: { code?: string } }) {
  if (!searchParams.code) {
    return <p>Missing code</p>;
  }
  redirect(`/exchange-token?code=${searchParams.code}`);
}