import "./contactform.css";
import Button from "./Button.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SuccessModal from "./modals/SuccessModal.jsx";
import ErrorModal from "./modals/ErrorModal.jsx";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [modalType, setModalType] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setModalType("success");
      reset();
    } catch (error) {
      console.error(error);
      setModalType("error");
    } finally {
      setIsSending(false);
    }

    // auto-close modal
    setTimeout(() => setModalType(null), 3000);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first-row">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
        />
        <Button
          style={{ alignSelf: "flex-start" }}
          type="submit"
          disabled={isSending}
        >
          {isSending ? "SENDING..." : "SEND"}
        </Button>
      </form>

      {modalType === "success" && (
        <SuccessModal onClose={() => setModalType(null)} />
      )}
      {modalType === "error" && (
        <ErrorModal onClose={() => setModalType(null)} />
      )}
    </>
  );
}
