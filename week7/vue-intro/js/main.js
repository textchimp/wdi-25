console.log('Hello Vue');

let app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Vue land!',
    hoverMessage: 'You loaded this page on ' + new Date().toLocaleString(),
    bill: 'http://fillmurray.com/300/200',
    anotherMessage: 'Hover me!',
    seen: true,
    todos: [
      { text: 'Learn Vue' },
      { text: 'Stay awake' },
      { text: 'Do homework' },
      { text: 'Get enough sleep' }
    ]
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    }
  }
});

// setInterval(function(){
//   app.message = new Date().toLocaleString();
// }, 1000);
