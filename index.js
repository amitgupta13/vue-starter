new Vue({
	el: '#app',
  data: {
  	title: 'Hello world!'
  },
  methods: {
  	changeTitle: function (e) {
    console.log({e})
    	this.title = e.target.value;
    }
  }
})