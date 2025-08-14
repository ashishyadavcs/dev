import OpenAI from "openai";

export default async function handler(req, res) {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(500).json({
                error: "No prompt provided",
            });
        }
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const response = await openai.responses.create({
            model: "gpt-4o-mini",
            input: prompt,
            store: false,
        });

        res.status(200).json({ data: response.output_text });
    } catch (error) {
        return res.status(500).json({
            error: "Error generating response",
        });
    }
}
