function ToneSelector({ tone, setTone }) {
  return (
    <select
      className="border p-2 rounded w-full max-w-md mb-3"
      value={tone}
      onChange={(e) => setTone(e.target.value)}
    >
      <option>Formal</option>
      <option>Friendly</option>
      <option>Funny</option>
      <option>Persuasive</option>
      <option>Motivational</option>
    </select>
  );
}

export default ToneSelector;
