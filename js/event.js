new Vue({
  el: "#app",
  data: {
    message: ""
    // screenX: 0,
    // screenY: 0,
    // pageX: 0,
    // pageY: 0,
    // clientX: 0,
    // clientY: 0,
    // offsetX: 0,
    // offsetY: 0
    // path: "http://www.web-deli.com/image/linkbanner_1.gif"
  },
  methods: {
    // onmousemove: function(e) {
    //   this.screenX = e.screenX;
    //   this.screenY = e.screenY;
    //   this.pageX = e.pageX;
    //   this.pageY = e.pageY;
    //   this.clientX = e.clientX;
    //   this.clientY = e.clientY;
    //   this.offsetX = e.offsetX;
    //   this.offsetY = e.offsetY;
    // }
    // クリック時に現在日時を取得
    // onclick: function() {
    //   this.message = new Date().toLocaleString();
    // }
    onclick: function(message, e) {
      console.log(e);
      console.log(message);
    }
    // onmouseenter: function() {
    //   this.path = "http://www.web-deli.com/imgae/home_chara.gif";
    // },
    // onmouseleave: function() {
    //   this.path = "http://www.web-deli.com/image/linkbanner_1.gif";
    // }
  }
});
