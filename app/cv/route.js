import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
	const file = await readFile(
		path.join(process.cwd(), "public", "docs", "Resume.pdf")
	);

	return new Response(file, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition":
				'attachment; filename="Wildan-Hanif-Abdillah-CV.pdf"',
			"Cache-Control": "public, max-age=3600",
		},
	});
}
