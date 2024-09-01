import { writeFile } from "fs/promises";
import path from "path";

export default async function handler(req, res) {
    const filepath = path.join(process.cwd(), req.body.path);
    try {
        const { data } = req.body;
        await writeFile(filepath, data);
        res.json({
            success: true,
            message: "settings updated",
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
}
