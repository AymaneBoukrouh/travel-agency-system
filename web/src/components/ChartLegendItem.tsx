interface ChartLegendItemProps {
  name: string;
  value: number;
  color: string;
  novalue: boolean;
}

const ChartLegendItem = ({ name, value, color, novalue=false }: ChartLegendItemProps) => {
  const s_value = value; // save value as string for later use

  if (novalue) value = 0;

  // replace comma in value with nothing
  value = value.toString().replace(/,/g, '');

  // convert value to number
  value = Number(value);

  return (
    <div className="col d-flex justify-content-between align-items-center border rounded-3 px-2 py-1">
      <div className="d-flex align-items-center">
        <div className="rounded-circle" style={{ width: '20px', height: '20px', backgroundColor: color }}></div>
        <div className="ms-2">{name}</div>
      </div>
      {!novalue && <div className={`${value >= 0 ? 'text-success' : 'text-danger' } fw-bold`}>{value >= 0 ? `+$${s_value}` : `-$${s_value}`}</div>}
    </div>
  )
}

export default ChartLegendItem;
