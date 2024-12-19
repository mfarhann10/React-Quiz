/* eslint-disable react/prop-types */
function Main({ children }) {
  return (
    <main className="w-[50rem] bg-white shadow-md rounded-lg p-6">
      {children}
    </main>
  );
}

export default Main;
