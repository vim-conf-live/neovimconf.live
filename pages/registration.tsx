import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import userbase from 'userbase-js';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('userbase', userbase);
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmitRegistration = useCallback(() => {
    console.log('email', email);
  }, [email]);

  return (
    <div>
      <input type="text" value={email} onChange={handleEmailChange} />
      <button onClick={handleSubmitRegistration}>Register</button>
    </div>
  );
};

export default RegistrationPage;
