export default function Text({ children }) {
  return (
    <>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {children}
      </div>
    </>
  );
}
