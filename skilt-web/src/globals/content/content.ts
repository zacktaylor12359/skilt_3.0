export type Content = {
	sample: string;
	header: string;
	subheader: string;
	button: {
		text: string;
	};
	footer: string;
	cardList: string[];
};

const content: Content = {
	sample: 'hello there',
	header: 'Welcome',
	subheader: 'This is a sample application',
	button: {
		text: 'Click me',
	},
	footer: 'All rights reserved',
	cardList: ['testing', 'testing']
};

export default content;
