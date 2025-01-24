import React, { useEffect } from 'react';
import { useContent } from './context_store/ContentContext';

const App: React.FC = () => {
	const { content } = useContent();

	// Check localStorage on initial load
	// Effect to check and apply theme on initial load
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			document.body.classList.add(savedTheme);
		} else {
			// Apply default theme if nothing is saved
			document.body.classList.add('light-theme');
		}
	}, []);

	//TODO: This function will likely be moved to some sort of settings page. It is not assigned to any button for now
	// Function to toggle theme and save it to localStorage
	// const toggleTheme = () => {
	// 	const newTheme = document.body.classList.contains('light-theme')
	// 		? 'dark-theme'
	// 		: 'light-theme';
	// 	document.body.classList.replace('light-theme', newTheme); // Replace the theme class
	// 	document.body.classList.replace('dark-theme', newTheme); // In case of switching to light theme

	// 	localStorage.setItem('theme', newTheme); // Save theme to localStorage
	// };

	return (
		<>
			<p>{content.sample}</p>
		</>
	);
};

export default App;
