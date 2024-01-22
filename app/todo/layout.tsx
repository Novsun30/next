import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "To do list page",
	description: "Just a to do list"
};

export default function TodoLayout ({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
