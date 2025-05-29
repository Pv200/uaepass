import { redirect } from 'next/navigation';

interface CallbackPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CallbackPage({ searchParams }: CallbackPageProps) {
  const code = searchParams.code;

  if (!code || (Array.isArray(code) && code.length === 0)) {
    return <p>Missing code</p>;
  }

  // If `code` is an array, take the first one
  const codeValue = Array.isArray(code) ? code[0] : code;

  redirect(`/exchange-token?code=${codeValue}`);
}
