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

function defaultSetters() {
  gsap.set("#home nav a", { y: "100%", opacity: 0 });
  gsap.set(".text1 .reveal .child,.text2 .reveal .child", { y: "100%" });
  gsap.set(".text2 .circle", { opacity: 0 });
  gsap.set(".sub-headings .reveal .child", { y: "100%" });

  document.querySelectorAll("#Visual>g").forEach((e) => {
    let character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

function loaderAnimation() {
  let xValue;
  if (window.innerWidth <= 767) {
    xValue = 40; // Mobile ke liye
  } else {
    xValue = 100; // PC ke liye
  }

  let tl = gsap.timeline();

  tl.from(".loader .child>span", {
    x: xValue,
    duration: 0.7,
    stagger: 0.1,
    ease: Power3.easeInOut,
  })
    .from(".loader .child>span:nth-child(2), .child>span:last-child", {
      opacity: 0,
      duration: 0.7,
      delay: -0.5,
    })
    .to(".loader .parent .child", {
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
}

function date() {
  let dt = new Date();

  let newTime = `${dt.getHours()}:${dt.getMinutes()}`;
  document.querySelector(".time").textContent = newTime;
}

function animateSvg() {
  let tl = gsap.timeline({ ease: "power4.out" });

  tl.to("#V path, #V polyline", {
    strokeDashoffset: 0,
    duration: 0.4,
  })
    .to("#i path, #i polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    })
    .to("#s path, #s polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    })
    .to("#u path, #u polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    })
    .to("#a path, #a polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    })
    .to("#l path, #l polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    })
    .to("#dot path, #dot polyline", {
      strokeDashoffset: 0,
      duration: 0.4,
    });
}

function animateHomepage() {
  date();

  let tl = gsap.timeline();
  tl.to("#home nav a", {
    y: "0%",
    opacity: 1,
    delay: 2.5,
    duration: 1,
    ease: Expo.easeInOut,
  })
    .to(".text1>.reveal .child,.text2 .reveal .child", {
      y: "0%",
      duration: 0.5,
      delay: -0.8,
      duration: 1.1,
      ease: "power4.out",
    })
    .to(".sub-headings .reveal .child", {
      y: "0%",
      delay: -0.5,
      stagger: 0.2,
      ease: "power4.out",
    })
    .to(".text2 .visual .svg .dash", {
      scaleX: 1,
      ease: "power4.out",
      delay: -0.5,
    })
    .to(".text2 .circle", {
      opacity: 1,
      delay: -0.5,
      ease: "power4.out",
      onComplete: animateSvg,
    });
}

spanArchitecture();
defaultSetters();
loaderAnimation();
animateHomepage();
