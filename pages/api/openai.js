import OpenAI from "openai";

export default async function handler(req, res) {
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(500).json({
            error: "No prompt provided",
        });
    }
    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true,
            apiKey: process.env.OPENAI_API_KEY,
        });

        const response = await openai.responses.create({
            model: "gpt-4o-mini",
            input: prompt,
            store: false,
        });

        res.status(200).json({ data: response.output_text });
    } catch (error) {
        res.status(500).json({
            error: "Error generating response",
        });
    }
}
