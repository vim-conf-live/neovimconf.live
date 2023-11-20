import type { Talk} from 'components/DayTable';

const DayTableRow = (props:Talk) => {
  const { time, speaker, title } = props;

  return (
      <tr>
        <td>{time}</td>
        <td>{speaker}</td>
        <td>{title}</td>
      </tr>
  );
};

export default DayTableRow;
