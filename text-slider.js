const { tween, physics, styler, easing, value } = window.popmotion;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function verticalIn(word) {
  tween({
    from: 0,
    to: 1,
    duration: 750
  }).start(v => word.set("opacity", v));
  tween({
    from: -20,
    to: 0,
    duration: 750
  }).start(v => word.set("y", v));
}

function verticalOut(word) {
  tween({
    from: 1,
    to: 0,
    duration: 750
  }).start(v => word.set("opacity", v));
  tween({
    from: 0,
    to: 20,
    duration: 750
  }).start(v => word.set("y", v));
}
var word_node = document.getElementsByClassName("v-sliding-text");
async function wordVerticalSlider(node) {
  for (var i = 0; i < words.length; i++) {
    node[0].innerText = words[i];
    word = styler(node[0]);
    setTimeout(function() {
      verticalIn(word);
    }, 1000);
    setTimeout(function() {
      verticalOut(word);
    }, 4000);
    await sleep(5000);
  }
  wordVerticalSlider(node);
}
