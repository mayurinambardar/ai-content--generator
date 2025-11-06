function TopicInput({ topic, setTopic }) {
  return (
    <input
      type="text"
      className="border p-2 rounded w-full max-w-md mb-3"
      placeholder="Enter your topic..."
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    />
  );
}

export default TopicInput;
