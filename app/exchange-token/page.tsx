import { redirect } from 'next/navigation';

export default async function ExchangeTokenPage({ searchParams }: { searchParams: { code?: string } }) {
  const { code } = searchParams;
  const redirectUri = 'https://localhost:3000/callback';

  const tokenRes = await fetch('https://stg-id.uaepass.ae/idshub/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from('sandbox_stage:sandbox_stage').toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: code || '',
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return <pre>{JSON.stringify(tokenData, null, 2)}</pre>;
  }
  redirect(`/user-info?access_token=${tokenData.access_token}`);
}