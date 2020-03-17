Vue.component("progetti", {
  template: `
      <div id="progetti-container">
        <div class="columns is-centered">
            <div class="column is-narrow has-text-centered">
                <h1 class="title" id="progetti-title">PROGETTI</h1>
            </div>
        </div>
      </div>
      `,
  data() {
    return {};
  }
});

var app = new Vue({
  el: "#app"
});
