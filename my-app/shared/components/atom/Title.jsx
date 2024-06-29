export default function Title({ children }) {
  return (
    <>
      <div className="text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
        {children}
      </div>
    </>
  );
}
