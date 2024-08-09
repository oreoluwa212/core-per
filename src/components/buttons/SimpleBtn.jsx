function SimpleBtn({ href, className, children, onClick }) {
  return (
    <a href={href}>
      <button onClick={onClick} className={`bg-transparent text-white py-3 text-sm rounded-[24px] hover:bg-black font-medium ${className}`}
    >
      {children}
    </button>
    </a>
  );
}

export default SimpleBtn;
