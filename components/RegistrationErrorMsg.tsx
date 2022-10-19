const RegistrationErrorMsg = () => {
  return (
    <div
      className={`container m-4 mx-auto flex min-h-screen items-center
      justify-center font-mono 
    `}
    >
      <div className="text-2xl text-red-500">
        <p>{`There has been a problem with your registration.`}</p>
        <p>{`Please, try again later.`}</p>
      </div>
    </div>
  );
};

export default RegistrationErrorMsg;
