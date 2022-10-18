import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import userbase from 'userbase-js';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('userbase', userbase);
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmitRegistration = useCallback(
    (event) => {
      event.preventDefault();
      console.log('email', email);
    },
    [email]
  );

  return (
    <div
      className={`container m-4 mx-auto flex min-h-screen
items-center justify-center 
    `}
    >
      <form className="flex w-96 flex-col gap-4">
        <label className="text-sm text-gray-300">Register to speak</label>
        <input
          className="p-2"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className={`rounded bg-gray-200 px-4 py-2 shadow transition 
            hover:bg-gray-300`}
          onClick={handleSubmitRegistration}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
