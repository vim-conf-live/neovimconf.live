const RegistrationSuccessMsg = () => {
  return (
    <div
      className={`container m-4 mx-auto flex min-h-screen items-center
      justify-center font-mono 
    `}
    >
      <div className="text-2xl text-green-500">
        <p>{`Congratulations! You have registered for NeoVim Conf 2022.`}</p>
        <p>{`Looking forward to seeing you there!`}</p>
        <p>{`Don't forget to add a reminder to your calendar.`}</p>
      </div>
    </div>
  );
};

export default RegistrationSuccessMsg;
