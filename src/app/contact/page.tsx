import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="max-w-2xl mx-auto mt-32 p-6">
        <h2 className="text-3xl font-bold mb-4">Kontak</h2>
        <p className="mb-4">Ingin bekerja sama? Hubungi saya melalui:</p>
        <ul className="space-y-2">
          <li>
            Email:{" "}
            <a href="mailto:kamu@email.com" className="text-indigo-600">
              kamu@email.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/kamu" className="text-indigo-600">
              linkedin.com/in/kamu
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/kamu" className="text-indigo-600">
              github.com/kamu
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
