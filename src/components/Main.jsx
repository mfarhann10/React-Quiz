/* eslint-disable react/prop-types */
function Main({ children }) {
  return (
    <main className="w-[50rem] bg-white shadow-lg rounded-lg p-8 text-black">
      {children}
    </main>
  );
}

export default Main;
