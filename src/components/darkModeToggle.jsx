import { useEffect, useState } from "react";

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Save preference to localStorage

    useEffect(() => {
        const storedTheme =
         localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);

            document.body.classList.add("dark-mode");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    };
    return (
        <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? "🌞" : "🌙"}
        </button>
    );
}

export default DarkModeToggle;