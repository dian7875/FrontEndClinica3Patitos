const DarkModeToggle = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className={isDarkMode ? 'dark bg-Dark text-Dark-light border-Dark-dark border-2' : 'bg-primary text-black'}
        >
            {isDarkMode ? "Desactivar modo oscuro" : "Activar modo oscuro"}
        </button>
    );
};

export default DarkModeToggle;
