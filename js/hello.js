let app = new Vue({
  el: "#app",
  data: {
    message: "皆さん、こんにちは!",
    url: "https://wings.msn.to/",
    flag: true,
    email: "Y-Suzuki@example.com",
    current: new Date().toLocaleString(),
    author: {
      name: "山田"
    },
    name: "",
    upperName: ""
  },
  // created: function() {
  //   this.delayFunc = _.debounce(this.getUpper, 2000);
  // },
  // watch: {
  //   name: function(newValue, oldValue) {
  //     this.delayFunc();
  //   }
  // },
  computed: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
  // computed: {
  //   localEmail: function() {
  //     return this.email.split("@")[0].toLowerCase();
  //   },
  //   randomc: function() {
  //     return Math.random();
  //   }
  // },
  // methods: {
  //   localEmail: function() {
  //     return this.email.split("@")[0].toLowerCase();
  //   },
  //   onclick: function() {
  //     this.current = new Date().toLocaleString();
  //   },
  //   randomm: function() {
  //     return Math.random();
  //   }
  // },
  // created: function() {
  //   let that = this;
  // 1000msスパンでcurrentプロパティを更新
  // this.timer = setInterval(() => {
  // that.author.name = "Y.YAMADA";
  // that.author.company = "WINGプロジェクト";
  // Vue.assign({}, that.author, {
  //   company: "WINGSプロジェクト",
  //   sex: "male",
  //   age: 18
  // });

  // that.current = new Date();
  // }, 3000);
  // },
  // mounted: function() {
  //   Vue.set(this.author, "company", "WINGSプロジェクト");
  //   let that = this;
  //   this.$nextTick().then(() => {
  //     console.log(this.$el.textContent.includes(that.author.company));
  //   });
  // }
  // beforeCreate: function() {
  //   console.log("beforeCreate");
  // },
  // created: function() {
  //   console.log("created");
  // },
  // beforeCreate: function() {
  //   console.log("beforeCreate");
  // },
  // beforeMount: function() {
  //   console.log("beforeMount");
  // },
  // mounted: function() {
  //   console.log("mounted");
  // },
  // beforeUpdate: function() {
  //   console.log("beforeCreate");
  // },
  // updated: function() {
  //   console.log("updated");
  // },
  // beforeDestroy: function() {
  //   clearInterval(this.timer);
  // }
  // destroyed: function() {
  //   console.log("destroyed");
  // }
});

// setTimeout(() => {
//   app.$destroy();
// }, 3000);
