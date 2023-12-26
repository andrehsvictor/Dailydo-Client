type SubmitButtonProps = {
  onClick: React.FormEventHandler<HTMLButtonElement>;
};

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <button
      type="button"
      className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
    >
      Entrar
    </button>
  );
};

export default SubmitButton;
