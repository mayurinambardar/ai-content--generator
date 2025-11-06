function OutputBox({ output }) {
  const wordCount = output ? output.split(" ").length : 0;

  if (!output) return null;

  return (
    <div className="bg-white mt-6 p-4 rounded shadow w-full max-w-2xl">
      <div className="flex justify-between mb-2 text-gray-600 text-sm">
        <p>Word count: {wordCount}</p>
      </div>
      <p className="text-gray-800 whitespace-pre-wrap">{output}</p>
    </div>
  );
}

export default OutputBox;
