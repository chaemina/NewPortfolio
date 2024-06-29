export default function Column({ col1, col2 }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">{col1}</div>
      <div className="md:w-1/2">{col2}</div>
    </div>
  );
}

// 활용 : <Column col1={"안녕"} col2={"그래"} />
