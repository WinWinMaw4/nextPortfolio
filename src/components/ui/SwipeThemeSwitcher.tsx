'use client'
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';

const SwipeThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        // Check system theme preference on mount
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem('theme');
        
        // Set initial theme based on localStorage or system preference
        const initialTheme = savedTheme ? savedTheme : (mediaQuery.matches ? 'dark' : 'light');
        setTheme(initialTheme as 'light' | 'dark');
        
        // Apply theme to document
        const root = window.document.documentElement;
        root.classList.toggle('dark', initialTheme === 'dark');

        // Add listener for changes in system theme preference
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            if (!savedTheme) { // Only update if no saved preference
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                root.classList.toggle('dark', newTheme === 'dark');
            }
        };
        
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup listener on component unmount
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => theme === 'light' && toggleTheme(),
        onSwipedRight: () => theme === 'dark' && toggleTheme(),
    });

    return (
        <div
            {...handlers}
            className="relative w-10 h-6 bg-gray-300 dark:bg-primary-200 rounded-full cursor-pointer flex items-center transition"
            onClick={toggleTheme}
        >
            <div
                className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center  bg-white dark:bg-primary shadow-lg transform transition ${theme === 'dark' ? 'translate-x-4' : ''
                    }`}
            >
                {theme === 'light' ? (
                    <FiSun className="text-black" size={15} />
                ) : (
                    <FiMoon className="text-white" size={15} />
                )}
            </div>
        </div>
    );
};

export default SwipeThemeSwitcher;
