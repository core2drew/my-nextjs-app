const ForgotPasswordPage = () => {
  return (
    <div className="w-72 flex flex-col">
      <input
        placeholder="Enter username or email"
        type="text"
        className="p-4 text-black"
      />

      <button className="bg-blue-500 text-white p-2 rounded">
        Forgot password
      </button>
    </div>
  );
};

export default ForgotPasswordPage;
