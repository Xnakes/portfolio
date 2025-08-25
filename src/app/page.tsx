import Navbar from "./components/navbar";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 via-yellow-50 to-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center pt-40 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-900 leading-tight">
          <Typewriter
            words={["Web Designer", "UI/UX Designer", "Mobile Developer"]}
            speed={120}
            delay={1200}
          />
        </h1>
        <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-900 leading-tight">
          Hey, I&apos;m Ruben Rafael <br />
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          I’m passionate about designing and developing modern web and mobile
          applications that are intuitive, responsive, and tailored for the best
          user experience.
        </p>
      </section>

      {/* ... lanjut About Section dll */}

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20">
        {/* Kartu Foto */}
        <div className="w-80 rounded-2xl overflow-hidden shadow-lg relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-green-100" />

          {/* Foto */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-[400px] object-cover relative z-10"
          />

          {/* Overlay gradient biar teks lebih kebaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent z-20" />

          {/* Nama & Role */}
          <div className="absolute top-6 left-6 text-emerald-700 z-30 drop-shadow-md">
            <h2 className="text-2xl font-bold">Ruben Rafael</h2>
            <p className="text-sm font-medium opacity-90 text-gray-700">
              Fullstack Developer
            </p>
          </div>

          {/* Box bawah untuk kontak */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 text-sm text-white shadow-md z-30">
            <div>
              <p className="font-semibold">@rubenrafael300104</p>
              <p className="text-xs text-green-200">Online</p>
            </div>
            <button className="px-4 py-1 rounded-lg bg-green-600 hover:bg-green-700 transition font-medium">
              Contact Me
            </button>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">
            Hey, I&apos;m Ruben
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I&apos;m a <b>Fullstack Developer</b> who loves turning ideas into
            beautiful, functional, and efficient digital experiences.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With hands-on experience in <b>Next.js, Firebase, Flutter, Dart,</b>{" "}
            and <b>Figma</b>, I build modern applications that are fast,
            reliable, and visually appealing.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I specialize in building modern and responsive mobile applications
            with <b>Flutter & Dart</b>, while also crafting scalable web
            platforms using <b>Next.js</b>. For design workflows, I leverage{" "}
            <b>Figma</b> to create intuitive and user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow hover:bg-emerald-700 transition">
              View My Work
            </a>
            <a
              href="/cv.pdf"
              className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="flex flex-col items-center justify-center px-8 py-20 
             ">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">
          {[
            "Flutter",
            "Firebase",
            "Dart",
            "HTML",
            "next", // pastikan sesuai nama file (Nextjs.svg)
            "CSS3",
            "JavaScript",
            "MySQL",
            "GitHub",
            "Figma",
          ].map((skill, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl 
                   bg-white shadow-md border border-gray-200 transition 
                   transform hover:-translate-y-2">
              {/* Glow border highlight */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
                     ring-2 ring-emerald-400 shadow-[0_0_25px_5px_rgba(16,185,129,0.5)]"></div>

              {/* Ikon skill */}
              <img
                src={`/${skill}.svg`}
                alt={skill}
                className="w-12 h-12 mb-4 relative z-10"
              />

              {/* Nama skill */}
              <h3 className="text-lg font-semibold relative z-10">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center px-8 py-20 
  bg-gradient-to-b from-yellow-50 via-white to-green-50 text-gray-800">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12">
          My Projects
        </h2>

        {/* Grid Project */}
        <div className="flex flex-col gap-8 max-w-6xl w-full">
          {[
            {
              title: "Browz Store",
              category: "Application Design",
              desc: "Aplikasi TopUp Games Browz Store",
              tech: ["Figma"],
              image: "/browz.png",
              link: "https://www.figma.com/design/ynyW6T9JRWCUOVE6m6QVU1/BROWZ-STORE?node-id=0-1&p=f&t=jMIwQB6Bvrq2JSUu-0",
            },
            {
              title: "Ecclesia Familly church",
              category: "Mobile App",
              desc: "Aplikasi Mobile Relawan dan jemaat Gereja GBI Ecclesia",
              tech: ["Flutter", "Dart", "Firebase"],
              image: "/EFC.jpg",
              link: "https://github.com/Xnakes/app-efc",
            },
            {
              title: "Walletku",
              category: "App UI/UX Design & Prototype",
              desc: "UI/UX Design Aplikasi E-Wallet",
              tech: ["Figma"],
              image: "/Walletku.png",
              link: "https://www.figma.com/design/M68qJqAcx0TJec82Nljla6/Walletku?node-id=0-1&p=f&t=Z8uTCHSmQR5JTJyB-0",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden hover:shadow-xl transition">
              {/* Thumbnail */}
              <div className="md:w-1/3 w-full flex items-center justify-center bg-black">
                <div className="md:w-1/3 w-full flex items-center justify-center bg-black p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-96 object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-emerald-500 font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-emerald-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 flex-1">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-emerald-700 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-emerald-600 font-semibold hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

      <footer
        id="contact"
        className="bg-white border-t border-gray-200 text-gray-700 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-600">
              Ruben Rafael
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Membangun pengalaman digital modern melalui pengembangan web,
              aplikasi mobile, dan desain UI/UX yang berfokus pada kualitas dan
              pengguna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-emerald-600 transition">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:youremail@gmail.com"
                  className="hover:text-emerald-600">
                  rubenrafael300104@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+62895150999" className="hover:text-emerald-600">
                  +62 895 1530 999
                </a>
              </li>
              <li>Location: Jakarta, Indonesia</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/Xnakes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ruben-rafael-441654380/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ruben Rafael. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
