new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    link: "https://google.com",
    finishedLink: "<a href='https://google.com'>Google</a>",
    counter: 0,
    x: 0,
    y: 0,
    name: "Max",
    secondCounter: 0,
    red: false,
    color: "green",
    fontSize: "16",
  },
  computed: {
    output: function () {
      console.log("Computed");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    addClasses() {
      return {
        blue: !this.red,
        red: this.red,
      };
    },
    myStyle() {
      return {
        color: this.color,
        "font-size": this.fontSize + "px",
      };
    },
  },
  watch: {
    counter: function (value) {
      console.log({ value });
      const vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000);
    },
  },
  methods: {
    sayHello: function () {
      this.title = "Hello";
      return this.title;
    },
    changeTitle: function (e) {
      this.title = e.target.value;
    },
    result: function (step, e) {
      console.log("Method");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    updateCoordinates: function (e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function () {
      alert("Yo");
    },
  },
});
