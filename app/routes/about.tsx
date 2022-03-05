import { Link, useLoaderData } from 'remix';

export const loader = async () => {
  return null;
}

export default function About() {
  const data = useLoaderData();
  return (
    <main>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </main>
  );
}