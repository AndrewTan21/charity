import App from './App.svelte';

const app = new App({
	target: document.querySelector("#root")
	// target: document.body,
	// props: {
	// 	name: 'world'
	// }
});

export default app;