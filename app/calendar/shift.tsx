interface Props {
  employeeName: string;
  timeStart: any;
  timeEnd: any;
}

const Shift = ({ employeeName, timeStart, timeEnd }: Props) => {
  return (
    <div className="justify-between p-4 hover:cursor-pointer hover:bg-opacity-80 bg-purple-600">
      <h3>{employeeName}</h3>
      <div>
        <span>{timeStart}</span> - <span>{timeEnd}</span>
      </div>
    </div>
  );
};

export default Shift;
