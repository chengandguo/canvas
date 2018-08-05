export default function () {
  let body = document.querySelector("body");
  body.addEventListener("click", (event) => {
    let target = event.target;
    if(target.classList.contains("active-state")) {
      target.classList.add("active");
      window.setTimeout(() => {
        target.classList.remove("active");
      }, 100);
    } 
  });
}