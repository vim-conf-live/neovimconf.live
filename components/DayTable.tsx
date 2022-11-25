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

const DayTable = (props: Props) => {
  const { talks, date } = props;

  const tableRows = talks.map((talk) => (
    <DayTableRow key={talk.title} {...talk} />
  ));

  return (
    <div className="agenda mx-auto text-lg">
      <style jsx global>{`
        .agenda table {
          display: inline-table;
          margin: 32px 0;
        }

        .agenda thead {
          color: yellow;
          font-weight: bold;
          border-bottom: 1px solid white;
        }

        .agenda tbody tr {
          border-bottom: 1px solid #666;
        }

        .agenda td {
          padding: 1rem;
        }
      `}</style>
      <h3 className="my-4 text-2xl font-bold">{date}</h3>
      <table className="">
        <thead>
          <tr>
            <td>Time</td>
            <td>Speaker</td>
            <td>Talk title</td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default DayTable;
