function download(e) {
  document.querySelector(".pop").classList.add("active");
  var t = 10;
  let o = setInterval(() => {
    !(function c() {
      if (t > 0) (t -= 1), (document.querySelector(".pop .time").innerText = t);
      else {
        clearInterval(o);
        let l = document.createElement("a");
        (l.href = e),
          (l.download = e),
          l.click(),
          l.remove(),
          document.querySelector(".pop").classList.remove("active");
      }
    })();
  }, 500);
}
