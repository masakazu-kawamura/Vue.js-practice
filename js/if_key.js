new Vue({
  el: "#app",
  data: {
    pay: "credit",
    songs: [
      {
        title: "赤とんぼ",
        lyrics: "夕焼け小焼の赤トンボ",
        composer: "山田耕作"
      },
      {
        title: "赤とんぼ",
        lyrics: "夕焼け小焼の赤トンボ",
        composer: "山田耕作"
      },
      {
        title: "赤とんぼ",
        lyrics: "夕焼け小焼の赤トンボ",
        composer: "山田耕作"
      }
    ],
    name: "匿名",
    list: ["赤パジャマ", "青パジャマ", "きパジャマ"],
    attrs: {
      size: 20,
      maxlength: 14,
      required: true
    },
    attr: "width",
    size: 100,
    color: {
      backgroundColor: "Aqua",
      color: "Red"
    },
    size: {
      fontSize: "1.5em"
    },
    // コンテキストメニューの表示位置
    pos: {
      left: 0,
      top: 0
    },
    // コンテキストメニューの表示状態
    show: false
  },
  methods: {
    // ボタンクリック時に2番目の要素を変更
    onclick: function() {
      // Vue.set(this.list, 1, "茶パジャマ");
      this.list.shift();
    },
    onsubmit: function(e) {
      if (!confirm("送信しても良いですか?")) {
        e.preventDefault();
        return;
      }
    },
    onParentClick: function(e) {
      console.log("#parent run...");
    },
    onMyClick: function(e) {
      console.log("#my run...");
    },
    onChildClick: function(e) {
      console.log("#child run...");
    },
    // Escキーでテキストをクリア
    clear: function() {
      this.name = "";
    },
    help: function() {
      window.alert("氏名(漢字)を入力してください");
    },
    onleftclick: function() {
      this.show = false;
    },
    onrightclick: function(e) {
      this.pos = {
        top: e.pageY + "px",
        left: e.pageY + "px"
      };
      this.show = true;
    }
  }
});
