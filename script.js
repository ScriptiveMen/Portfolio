function spanArchitecture() {
  document.querySelectorAll(".reveal").forEach((elem) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;

    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}
spanArchitecture();

let tl = gsap.timeline();

tl.from(".child>span", {
  x: 100,
  duration: 0.7,
  stagger: 0.1,
  ease: Power3.easeInOut,
})
  .from(".child>span:nth-child(2), .child>span:last-child", {
    opacity: 0,
    duration: 0.7,
    delay: -0.5,
  })
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to(".loader", {
    height: 0,
    duration: 1.5,
    delay: -0.7,
    ease: Circ.easeInOut,
  });
