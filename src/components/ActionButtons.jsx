function ActionButtons({ onGenerate, loading, onCopy, onDownload, showExtras }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Content"}
      </button>

      {showExtras && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={onCopy}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
          >
            Copy
          </button>
          <button
            onClick={onDownload}
            className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-800"
          >
            Export .txt
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionButtons;
