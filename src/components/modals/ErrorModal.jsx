import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import "./modal.css";

export default function ErrorModal({ onClose }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;
    animate(scope.current, { opacity: 1, scale: 1, filter: "blur(0px)" }, { duration: 0.3 });
  }, [animate, scope]);

  const handleClose = () => {
    animate(scope.current, { opacity: 0, scale: 0.95, filter: "blur(4px)" }, { duration: 0.25 }).then(() => {
      onClose();
    });
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        ref={scope}
        className="modal"
        style={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Message Not Sent ❌</h2>
        <p>Sorry! Something went wrong, please try again.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
