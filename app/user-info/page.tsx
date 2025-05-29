export default async function UserInfoPage({ searchParams }: { searchParams: { access_token?: string } }) {
  const userRes = await fetch('https://stg-id.uaepass.ae/idshub/userinfo', {
    headers: {
      Authorization: `Bearer ${searchParams.access_token}`,
    },
  });
  const user = await userRes.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">UAE PASS User Info</h1>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
    </main>
  );
}