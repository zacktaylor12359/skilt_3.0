export type Content = {
	sample: string;
	header: string;
	subheader: string;
	button: {
		text: string;
	};
	footer: string;
};

const content: Content = {
	sample: 'hello there',
	header: 'Welcome',
	subheader: 'This is a sample application',
	button: {
		text: 'Click me',
	},
	footer: 'All rights reserved',
};

export default content;
