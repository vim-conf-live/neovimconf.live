const genericErrorMsg = `There has been a problem with your registration.
Please try again or contact us on our Discord channel`;

interface Props {
  error: boolean;
}

const RegistrationErrorMsg = (props: Props) => {
  const { error } = props;

  if (!error) {
    return null;
  }

  return (
    <div className="text-sm text-red-400">
      <p>{genericErrorMsg}</p>
    </div>
  );
};

export default RegistrationErrorMsg;
