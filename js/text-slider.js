const { tween, styler, keyframes } = window.popmotion;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var node = document.getElementsByClassName("v-sliding-text");
async function wordVerticalSlider(words, anim_time) {
  for (var i = 0; i < words.length; i++) {
    node[0].innerText = words[i];
    var word = styler(node[0]);
    keyframes({
      values: [
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1 },
        { y: 0, opacity: 1 },
        { y: 20, opacity: 0 }
      ],
      times: [0, 0.25, 0.75, 1],
      duration: anim_time
    }).start({ update: word.set });
    await sleep(anim_time);
  }
  wordVerticalSlider(words, anim_time);
}
