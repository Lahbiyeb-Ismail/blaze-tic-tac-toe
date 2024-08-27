import { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', { username, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1b1b32]">
      <div className="bg-[#2a2a4a] p-8 rounded-lg shadow-lg w-full max-w-[400px]">
        <h1 className="text-[#0074fc] text-[36px] font-bold text-center mb-8">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="text-gray-300 font-semibold block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-gray-300 font-semibold block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0074fc] hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
