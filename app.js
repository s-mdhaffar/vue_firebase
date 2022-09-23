const app = Vue.createApp({
	data () {
		return {
			show   : true,
			title  : 'Harry Potter',
			author : 'JK Rollings',
			age    : 45
		};
	},
	methods : {
		changeTitle (title) {
			this.title = title;
		},
		handleShow () {
			this.show = !this.show;
		}
	}
});

app.mount('#app');
