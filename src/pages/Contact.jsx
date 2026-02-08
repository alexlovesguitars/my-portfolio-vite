import ContactForm from "../components/ContactForm";
import PageTransition from "../hooks/PageTransition.jsx";

export default function Contact() {
  return (
    <PageTransition>
      <div className="container-fluid">
        <div className="Intro text-left">
          <h1>Get in touch</h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
