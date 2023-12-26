type UsernameInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const UsernameInput = ({ onChange, value }: UsernameInputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Usuário
      </label>
      <input
        id="username"
        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder="Digite seu nome de usuário"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default UsernameInput;
