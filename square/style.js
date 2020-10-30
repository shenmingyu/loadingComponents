const textInfo = document.getElementById("textInfo");
var text = "正在加载中.......";
function setText(changeText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      textInfo.innerHTML = changeText;
      resolve();
    }, 500);
  });
}
async function main(flag) {
  if (flag) {
    for (let i = 5; i < text.length; i++) {
      await setText(text.substr(0, i));
    }
  } else {
    setText(text.substr(0, 5));
  }

  main(!flag);
}
main(1);
