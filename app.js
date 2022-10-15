const app = Vue.createApp({
	data () {
		return {
			show   : true,
			title  : 'Harry Potter',
			author : 'JK Rollings',
			age    : 45,
			x      : 0,
			y      : 0
		};
	},
	methods : {
		changeTitle (title) {
			this.title = title;
		},
		handleShow () {
			this.show = !this.show;
		},
		handleEvent (e, data) {
			console.log(e, e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMouseMove (e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	}
});

app.mount('#app');
