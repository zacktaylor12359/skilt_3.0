import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContentProvider } from './context_store/ContentContext.tsx';
import './index.scss';
// import ChallengeCard from "components/ChallengeCard";

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ContentProvider>
			<App />
		</ContentProvider>
	</StrictMode>
);
