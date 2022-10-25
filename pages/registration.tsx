import { MouseEvent } from 'react';
import { useState, useCallback, ChangeEvent } from 'react';
import RegistrationSuccessMsg from 'components/RegistrationSuccessMsg';
import RegistrationErrorMsg from 'components/RegistrationErrorMsg';
import { FaSpinner } from 'react-icons/fa';
import registerToConf from 'utils/registerToConf';

const NEOVIM_CONF_2022_ID = 'adc031c3-9a8b-409c-b487-1ae56b470eb6';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmitRegistration = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(false);
      setSuccess(false);

      const  error  = await registerToConf(email, NEOVIM_CONF_2022_ID);
      if (error) {
        setError(true);
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
    },
    [email]
  );

  const buttonContent = loading ? (
    <FaSpinner className="inline-block animate-spin" />
  ) : (
    <span>Register</span>
  );

  return (
    <div
      className={`mx-auto mt-20 min-h-screen max-w-screen-sm text-center
       sm:mt-40
    `}
    >
      <h1 className="mb-16 text-4xl">Register to attend the conference</h1>
      <form className="mb-4 flex items-stretch justify-center">
        <input
          className="w-72 rounded-l p-2 text-gray-800 
          invalid:text-red-500
          invalid:outline-red-500"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className={`w-28 rounded-r bg-gray-300 px-4 py-2 
            text-blue-900 shadow transition hover:bg-gray-400`}
          onClick={handleSubmitRegistration}
        >
          {buttonContent}
        </button>
      </form>
      <RegistrationErrorMsg error={error} />
      <RegistrationSuccessMsg show={Boolean(success)} />
    </div>
  );
}

export default RegistrationPage;
