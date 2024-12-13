{
  /* App.jsx */
}
import Navbar from "./components/navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <main className="background snap-y snap-mandatory overflow-y-auto scroll-smooth">
      {/* navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* About Me */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact Form */}
      {/* Contact Form */}
      <div
        className="container py-16 flex items-center justify-center flex-col lg:flex-row snap-start"
        id="contact"
      >
        <div className="contact-form-container flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
          <div className="text-4xl font-bold text-center mb-10">Contact Me</div>
          <ContactForm />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
