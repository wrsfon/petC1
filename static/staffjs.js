new Vue({
  el:"#searching",
  data: {
    links: [],
    state4: '',
    timeout: null
  },
  methods: {
    loadAll() {
      return [
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
       ];
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString ? links.filter(this.createFilter(queryString)) : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 10 * Math.random());
    },
    createFilter(queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.links = this.loadAll();
  }
});

new Vue({
  el:"#newAccount",
  data: {
      form: {
        firstName:'',
        lastName:'',
        email:'',
        tel:''
      },
      dialogAccount:false
    },
    methods: {
      createAccount() {
        console.log(this.form.firstName,this.form.lastName,this.form.email,this.form.tel);
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.email = '';
        this.form.tel = '';
        this.dialogAccount = false;
        this.$message({
          message: 'Account Created',
          type: 'success',
          center: true
        });
      },
      discard() {
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.email = '';
        this.form.tel = '';
        this.dialogAccount = false;
        this.$message({
          message: 'Change Discarded',
          type: 'error',
          center: true
        });
      }
    }
});

// var input = document.getElementById("telInput");
// input.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//       document.getElementById("createBt").click();
//     }
// });
