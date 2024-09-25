import { Link } from "react-router-dom";

function SimpleBtn({ href, className, children, onClick }) {
  return (
    <Link to={href}>
      <button
        onClick={onClick}
        className={`bg-transparent text-white py-3 text-sm rounded-[24px] hover:bg-black font-medium ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default SimpleBtn;
