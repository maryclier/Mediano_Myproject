import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Mary Clier Mediano</h1>

      <p>I am an IT student learning Next.js and web development.</p>

      <p>I enjoy learning how to build websites and applications.</p>

      <Link href="/projects">See my projects</Link>
    </main>
  );
}