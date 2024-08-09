function TransparentBtn({ btnText, onClick }) {
  return (
    <button onClick={onClick} className="bg-transparent text-black border-2 py-2 px-6 rounded-[20px] hover:bg-black hover:text-white cursor-pointer">
      {btnText}
    </button>
  );
}

export default TransparentBtn;
