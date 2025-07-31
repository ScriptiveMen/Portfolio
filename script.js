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

let xValue;
if (window.innerWidth <= 767) {
  xValue = 40; // Mobile ke liye
} else {
  xValue = 100; // PC ke liye
}

let tl = gsap.timeline();

tl.from(".child>span", {
  x: xValue,
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
    duration: 0.8,
    ease: Circ.easeInOut,
  })
  .to(".loader", {
    height: 0,
    duration: 1,
    delay: 0.4,
    ease: "power4.out",
  })
  .to(".green", {
    height: "100%",
    top: 0,
    duration: 1.2,
    delay: -1.2,
    ease: "power4.out",
  })
  .to(".green", {
    height: "0%",
    top: 0,
    duration: 1.1,
    delay: -1,
    ease: "power4.out",
  });
