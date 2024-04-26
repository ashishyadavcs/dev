// 👇️ using import/export syntax
import { readdir } from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
    async function listDirectories(pth) {
        const directories = (await readdir(pth, { withFileTypes: true }))
            .filter(dirent => dirent.isDirectory())
            .map(dir => dir.name);

        return directories;
    }
    const websites = await listDirectories("./public/demo/website-templates");
    res.json({
        templates: websites,
    });
}
