const { listen, value, pointer, inertia, calc } = window.popmotion;

Vue.component("progetti-boxes", {
  template: `
     <div class="horizontal-slider is-flex">
        <div v-for="progetto in progetti" class="preview box progetti-preview">{{progetto.name}}</div>
     </div>
    `,
  data() {
    return {
      progetti: [
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        },
        {
          name: "ChangyText JS"
        }
      ]
    };
  },
  methods: {
    scroll: function() {}
  }
});

Vue.component("progetti", {
  template: `
      <div id="progetti-container">
        <div class="columns is-centered">
            <div class="column is-narrow has-text-centered">
                <h1 class="title" id="progetti-title">PROGETTI</h1>
            </div>
        </div>
        <progetti-boxes></progetti-boxes>
      </div>
      `,
  data() {
    return {};
  }
});

var app = new Vue({
  el: "#app"
});

const slider = document.querySelector(".horizontal-slider");

const divStyler = styler(slider);
const sliderX = value(0, v => divStyler.set("x", v));

listen(slider, "mousedown touchstart").start(() => {
  pointer({ x: sliderX.get() })
    .pipe(({ x }) => x)
    .start(sliderX);
});

listen(document, "mouseup touchend").start(() => {
  inertia({
    min: -slider.scrollWidth + 200, //0,slider.scrollWidth
    max: -0, //getBoundariesWidth(),
    from: sliderX.get(),
    velocity: sliderX.getVelocity(),
    power: 0.6,
    bounceStiffness: 400,
    bounceDamping: 20
  }).start(sliderX);
});
