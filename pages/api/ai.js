import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const propmt = req.body.query || "";
    const prompt_str = propmt.toString();

    try {
        const result = await model.generateContent(prompt_str);
        res.json({
            data: result,
            success: true,
            message: "response generated",
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
}
