export default function Grid({item1, item2, item3}) {
  return (
    <>
      <div className="w-full reative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {item1}
        {item2}
        {item3}
      </div>
    </>
  );
}
