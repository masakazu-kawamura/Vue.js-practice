// Vue.component("my-hello", {
//   props: {
//     yourName: {
//       type: Number,
//       // default: "名無しの権兵衛"
//       required: true,
//       // 文字数が5文字以内であれば成功
//       validator: function(value) {
//         return value.length <= 5;
//       }
//     }
//   },
//   template: `<div>こんにちは,{{yourName}}さん!</div>`
// });
// Vue.component("my-counter", {
//   props: ["init"],
//   template: `<div>現在値は{{ current }}
//   <input type="button" @click="onclick" value="増やす" /></div>`,
//   data: function() {
//     return {
//       current: this.init
//     };
//   },
//   methods: {
//     // クリック時にcurrentプロパティをインクリメント
//     onclick: function() {
//       this.current++;
//     }
//   }
// });
// Vue.component("my-hello", {
//   template: `<div title="result" class="main">こんにちは、Vue.js!</div>`
// });
// Vue.component("my-counter", {
//   // ボタンクリックで加算する値
//   props: ["step"],
//   // クリック時にカウントアップ処理を実行
//   template: `<button type="button" @click="onclick">{{ step }}</button>`,
//   methods: {
//     onclick() {
//       this.$emit("plus", Number(this.step));
//     }
//   }
// });
// Vue.component("my-child", {
//   data: function() {
//     return {
//       message: ""
//     };
//   },
//   template: `<p>子: {{ message }}</p>`,
//   mounted: function() {
//     this.$root.message = "子から設定";
//   }
// });

// new Vue({
//   el: "#app",
//   data: {
//     message: ""
//   },
//   mounted: function() {
//     this.$refs.child.message = "親から設定";
//   }
// });

// new Vue({
//   el: "#app",
//   data: {
//     current: 0
//   },
//   methods: {
//     onplus: function(e) {
//       this.current += e;
//     }
//   }
// });

// Vue.component("my-hello", {
//   props: ["yourName"],
//   template: `<div>こんにちは,<slot>ゲスト</slot>さん!`
// });

// new Vue({
//   el: "#app"
// });

Vue.component("my-slot", {
  template: `<div>
  <header>
    <slot name="header">DEFAULT HEADER</slot>
  </header>
  <div>
    <slot>DEFAULT MAIN</slot>
  </div>
  <foooter>
    <slot name="footer">DEFAULT FOOTER</slot>
  </foooter>
  </div>`
});

new Vue({
  el: "#app"
});
