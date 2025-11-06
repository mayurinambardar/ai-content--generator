import { useState } from "react";
import { generateContent } from "./api";
import Header from "./components/Header";
import TopicInput from "./components/TopicInput";
import ToneSelector from "./components/ToneSelector";
import ActionButtons from "./components/ActionButtons";
import OutputBox from "./components/OutputBox";

function App() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Formal");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic!");
      return;
    }
    setLoading(true);
    const result = await generateContent(topic, tone);
    setOutput(result);
    setLoading(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <TopicInput topic={topic} setTopic={setTopic} />
      <ToneSelector tone={tone} setTone={setTone} />
      <ActionButtons
        onGenerate={handleGenerate}
        loading={loading}
        onCopy={handleCopy}
        onDownload={handleDownload}
        showExtras={!!output}
      />
      <OutputBox output={output} />
    </div>
  );
}

export default App;
