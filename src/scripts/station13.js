function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked) {
    console.log("checked");
    text.style.backgroundColor = "red";
  } else {
    console.log("unchecked");
    text.style.backgroundColor = "white";
  }
}
