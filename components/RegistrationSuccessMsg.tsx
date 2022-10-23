interface Props {
  show: boolean;
}

const RegistrationSuccessMsg = (props: Props) => {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="text-sm text-green-500">
      <p>{`Yay! You are going to NeovimConf 2022! Make sure to save the date.`}</p>
    </div>
  );
};

export default RegistrationSuccessMsg;
