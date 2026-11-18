import Image from "next/image";


export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "38px", color: "#111" }}>
        Hello, I am Mary Clier Mediano a BSIT student.
      </h1>

      <p style={{ fontSize: "18px", color: "#666" }}>
        Midterm Assignment No. 2 - My First Next.js App
      </p>
    </main>
  );
}