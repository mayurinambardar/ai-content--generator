import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateContent(topic, tone) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a creative writer that generates blogs and marketing emails.",
          },
          {
            role: "user",
            content: `Write a ${tone} blog introduction about "${topic}" in about 150 words.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Oops! Something went wrong while generating content.";
  }
}
