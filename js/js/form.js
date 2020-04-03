new Vue({
  el: "#app",
  data: {
    // myName: "匿名",
    // pet: "いぬ",
    // agree: false,
    // os: ["Windows", "macOS"]
    message: "",
    temperature: "",
    show: false,
    holiday: ""
  },
  methods: {
    // 入力値を小数点以下1位に丸め、ログ出力
    onchange: function() {
      console.log(this.temperature.toFixed(1));
    }
  }
  // onchange: function() {
  //   let fl = this.$refs.upfile.files[0];
  //   let data = new FormData();
  //   data.append("upfile", fl, fl.name);
  //   fetch("upload.php", {
  //     method: "POST",
  //     body: data
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(() => {
  //       this.message = text;
  //     })
  //     .catch(error => {
  //       window.alert("Error:" + error.message);
  //     });
  // }
});
