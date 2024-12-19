function Error() {
  return (
    <p className="text-center text-lg font-medium p-8 bg-red-500 text-white rounded-full shadow-md">
      <span className="mr-2">💥</span> There was an error fetching questions.
    </p>
  );
}

export default Error;
