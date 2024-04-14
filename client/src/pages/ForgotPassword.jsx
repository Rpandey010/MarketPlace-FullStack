import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().fetchSignInMethodsForEmail(email);
      if (userCredential.length === 0) {
        // Email not found
        setError('User not found. Please check your email and try again.');
        setMessage('');
      } else {
        // Email found, send password reset email
        await firebase.auth().sendPasswordResetEmail(email);
        setMessage('Password reset email sent. Please check your inbox.');
        setError('');
      }
    } catch (error) {
      setError('Failed to send password reset email. Please try again later.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold text-gray-700">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="w-64">
        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button type="submit" className="mt-4 w-full px-3 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500">Send Password Reset Email</button>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;