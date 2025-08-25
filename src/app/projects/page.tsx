import Navbar from "../components/navbar";

type Project = {
  name: string;
  tech: string;
  link: string;
};

const projects: Project[] = [
  { name: "Website Portfolio", tech: "Next.js, Tailwind", link: "#" },
  { name: "Sistem Gereja", tech: "Flutter, Firebase", link: "#" },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto mt-32 p-6">
        <h2 className="text-3xl font-bold mb-6">Proyek Saya</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.tech}</p>
              <a
                href={p.link}
                className="text-indigo-600 hover:underline mt-2 block">
                Lihat Proyek
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
