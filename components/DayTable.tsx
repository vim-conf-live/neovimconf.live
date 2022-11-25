import DayTableRow from 'components/DayTableRow';

export interface Talk {
  time: string;
  speaker: string;
  title: string;
}

interface Props {
  date: string;
  talks: Talk[];
}

const DayTable = (props:Props) => {
  const { talks , date} = props;
  console.log('props', props);

  const tableRows = talks.map(talk => <DayTableRow {...talk} />);

  return (
      <div className="mx-auto">
      <h3>{date}</h3>
      <table className="border">
        <thead>
          <tr>
            <td>Time</td>
            <td>Speaker</td>
            <td>Talk title</td>
          </tr>
        </thead>
        <tbody>
        {tableRows}
        </tbody>
      </table>
      </div>
  );
};

export default DayTable;
