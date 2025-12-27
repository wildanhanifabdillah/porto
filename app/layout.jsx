import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "WildanHA | Portofolio",

    description:
		"My name is Wildan Hanif Abdillah, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Gadjah Mada.",

    author: "Wildan Hanif Abdillah",
    siteUrl: "https://wildanhanifabdillah.cloud",
    applicationName: "WildanHA",

    keywords: [
		"WildanHA",
		"Wildan Hanif Abdillah"
	],

    openGraph: {
		type: "website",
		url: "https://wildanhanifabdillah.cloud",
		title: "WildanHA | Portofolio",
		site_name: "WildanHA | Portofolio",
		description: "My name is Wildan, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "WildanHA Portofolio",
			},
		],
		site_name: "WildanHA | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
