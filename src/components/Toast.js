// src/components/Toast.jsx
import '../styles/Toast.css'

export default function Toast({ show }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      Added to cart!
    </div>
  );
}
