interface ChartLegendItemProps {
  name: string;
  value: number;
  color: string;
  novalue: boolean;
}

const ChartLegendItem = ({ name, value, color, novalue=false }: ChartLegendItemProps) => {
  return (
    <div className="col d-flex justify-content-between align-items-center border rounded-3 px-2 py-1">
      <div className="d-flex align-items-center">
        <div className="rounded-circle" style={{ width: '20px', height: '20px', backgroundColor: color }}></div>
        <div className="ms-2">{name}</div>
      </div>
      {!novalue && <div className="fw-bold">${value}</div>}
    </div>
  )
}

export default ChartLegendItem;
