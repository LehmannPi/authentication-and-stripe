import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-10">
      <h2 className="mb-4 text-2xl">Sign Up</h2>
      {error && <div className="text-red-500">{error}</div>}
      <input
        className="block w-full p-2 mb-2 border"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="block w-full p-2 mb-2 border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="px-4 py-2 text-white bg-green-600 rounded"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
