export default function Container({ children }) {
  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full flex justify-center">
        {children}
      </div>
    </>
  );
}
