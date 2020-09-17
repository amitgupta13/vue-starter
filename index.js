new Vue({
	el: '#app',
  data: {
  	title: 'Hello world!',
    link: "https://google.com",
    finishedLink: "<a href='https://google.com'>Google</a>"
  },
  methods: {
  	sayHello: function () {
    	this.title = 'Hello';
      return this.title;
    },
    changeTitle: function (e) {
      this.title = e.target.value;
    }
  }
})