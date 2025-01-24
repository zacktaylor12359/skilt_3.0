import React, { createContext, ReactNode, useContext } from 'react';
import content, { Content } from '../globals/content/content'; // Import your JSON content

// Define the shape of the context value
interface ContentContextValue {
	content: Content;
}

// Create the Context
const ContentContext = createContext<ContentContextValue | undefined>(
	undefined
);

// Define Props for the Provider
interface ContentProviderProps {
	children: ReactNode;
}

// Create the Provider Component
export const ContentProvider: React.FC<ContentProviderProps> = ({
	children,
}) => {
	const currentContent: Content = content;
	return (
		<ContentContext.Provider value={{ content: currentContent }}>
			{children}
		</ContentContext.Provider>
	);
};

// Create a hook to use the ContentContext
export const useContent = (): ContentContextValue => {
	const context = useContext(ContentContext);
	if (!context) {
		throw new Error('useContent must be used within a ContentProvider');
	}
	return context;
};
