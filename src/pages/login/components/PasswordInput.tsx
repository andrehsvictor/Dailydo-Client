type PasswordInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const PasswordInput = ({ onChange, value }: PasswordInputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Senha
      </label>
      <input
        id="password"
        type="password"
        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder="Digite sua senha"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default PasswordInput;
