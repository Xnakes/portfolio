import Navbar from "./navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="max-w-3xl mx-auto mt-32 p-6">
        <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-lg leading-relaxed">
          Saya adalah seorang developer dengan minat di bidang frontend
          development, UI/UX, dan teknologi web modern. Saya suka membangun
          aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga indah
          dipandang dan mudah digunakan.
        </p>
      </section>
    </div>
  );
}
