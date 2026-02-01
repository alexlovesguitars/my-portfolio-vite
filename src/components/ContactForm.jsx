import "./contactform.css";
import Button from "./Button.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SuccessModal from "./modals/SuccessModal.jsx";
import ErrorModal from "./modals/ErrorModal.jsx";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [modalType, setModalType] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    reset();

/*     // Simulate API response (70% success)
    const isSuccess = Math.random() > 0.3;
    setModalType(isSuccess ? "success" : "error"); */

    // Auto-close after 3 seconds
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
          style={{ alignSelf: "flex-start" }} type="submit"
        >
        SEND
        </ Button>
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
