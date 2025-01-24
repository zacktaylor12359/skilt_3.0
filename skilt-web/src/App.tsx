import React, { useEffect } from 'react';
import { useContent } from './context_store/ContentContext';

const App: React.FC = () => {
	const { content } = useContent();

	// Check localStorage on initial load
	// Effect to check and apply theme on initial load
	// TODO: Add logic to change the theme. Likely in a settings page
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			document.body.classList.add(savedTheme);
		} else {
			// Apply default theme if nothing is saved
			document.body.classList.add('light-theme');
		}
	}, []);

	return (
		<>
			<p>{content.sample}</p>
		</>
	);
};

export default App;
