import { writeFile } from "fs/promises";

export default async function handler(req, res) {
    try {
        const { data, path } = req.body;
        await writeFile(path,data);
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
