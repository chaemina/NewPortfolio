export default function Text({ children }) {
  return (
    <div className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl whitespace-pre-line">
      {children}
    </div>
  );
}