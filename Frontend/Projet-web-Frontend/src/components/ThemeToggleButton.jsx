import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // optional, for icons

export default function ThemeToggleButton() {
	const [theme, setTheme] = useState(
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
		? "dark"
		: "light"
	);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="flex items-center justify-center h-full w-full">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full border border-gray-300 dark:border-gray-700 
						hover:bg-gray-200 dark:hover:bg-gray-100 dark:bg-gray-800 transition-colors"
				aria-label="Toggle Dark Mode"
			>
				{theme === "dark" ? (
				<Sun className="w-5 h-5 text-yellow-400" />
				) : (
				<Moon className="w-5 h-5 text-gray-700" />
				)}
			</button>
		</div>
	);
}
