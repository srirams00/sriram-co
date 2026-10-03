import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./Toast.css";

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <aside className="toast-notification" aria-live="polite" aria-atomic="true">
      <CheckCircle2 size={16} className="toast-icon" />
      <span className="toast-text">{toastMessage}</span>
    </aside>
  );
};

export default Toast;
