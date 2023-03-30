import * as THREE from "https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports,min/optimized/three.js";
import { GLTFLoader } from "https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports,min/unoptimized/examples/jsm/loaders/GLTFLoader.js"
import TWEEN from 'https://cdn.skypack.dev/tween-js-modern-module';

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";

});

window.document.addEventListener("DOMContentLoaded", function () {

  const main = document.getElementById("main");
  const about = document.getElementById("about");
  const project = document.getElementById("project");
  const header = document.getElementById("header");
  const nav1 = document.getElementById('web_site_menu_color_1');
  const nav2 = document.getElementById('web_site_menu_color_2');
  const nav3 = document.getElementById('web_site_menu_color_3');
  const menuItem = document.getElementById('web_site_menu_item');
  const button = document.getElementById('web_site_menu_icon_button');
  const contact_input = document.getElementById('contact_input');
  const power_button = document.getElementById('power_button');


  button.addEventListener("click", () => {
    contact_input.classList.toggle("contact_input_active");
    power_button.classList.toggle("power_button_active");
    menuItem.classList.toggle("web_site_menu_active");
    nav1.classList.toggle("web_site_menu_color_active_1");
    nav2.classList.toggle("web_site_menu_color_active_2");
    nav3.classList.toggle("web_site_menu_color_active_3");
    document.documentElement.classList.toggle("scroll_lock");
  })

  const menu_about = document.getElementById("menu_about");
  const menu_target = document.querySelectorAll(".web_site_menu li a");
  menu_target.forEach((target) => {
    target.addEventListener("click", () => {
      contact_input.classList.remove("contact_input_active");
      power_button.classList.remove("power_button_active");
      menuItem.classList.remove("web_site_menu_active");
      nav1.classList.remove("web_site_menu_color_active_1");
      nav2.classList.remove("web_site_menu_color_active_2");
      nav3.classList.remove("web_site_menu_color_active_3");
      document.documentElement.classList.remove("scroll_lock");
    });
  });

  function ScrollTo_menu() {
    setTimeout(function () {
      about.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  }


  window.addEventListener("DOMContentLoaded", () => {


    window.addEventListener("scroll", () => {
      const titleCopy0 = document.getElementById("title_copy_0");
      const titleCopy1 = document.getElementById("title_copy_1");
      const titleCopy2 = document.getElementById("title_copy_2");
      const titleCopy3 = document.getElementById("title_copy_3");
      const titleCopy4 = document.getElementById("title_copy_4");
      const titleCopy5 = document.getElementById("title_copy_5");
      const titleCopy6 = document.getElementById("title_copy_6");
      const titleCopy7 = document.getElementById("title_copy_7");

      var scroll_ = 0;
      var scroll2_ = 0;
      var scroll_ = window.scrollY;

      console.log(scroll_);

      var control = 5;
      var windowSize2 = 0;
      windowSize2 = window.innerWidth;

      const about_title = document.getElementById("about_title");

      if (about_title) {
        const scrollPosition = window.scrollY;
        const targetPosition = about_title.getBoundingClientRect().top + window.pageYOffset;
        if (scrollPosition >= targetPosition - 500) {
          if (scroll_ >= 800) {
            while (control < 200) {
              scroll2_ += 10;
              control += 1;
              if (scroll_ >= (790 + scroll2_)) {
                titleCopy0.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 0.1 + ")";
                titleCopy1.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 0.5 + ")";
                titleCopy2.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1 + ")";
                titleCopy3.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.5 + ")";
                titleCopy4.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.8 + ")";
                titleCopy5.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 2.1 + ")";
                titleCopy6.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 2.4 + ")";
                titleCopy7.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 2.7 + ")";

              }
            }
          }
        }
      }



    })
  })
  /*project title */

  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
  };

  const texts = [
    "THAT'S",
    "MY",
    "ALL",
    "PROJECTS"
  ];

  const morphTime = 1;
  const cooldownTime = 0.25;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
  }

  function animate2() {
    requestAnimationFrame(animate2);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime; 2

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  }

  animate2();





  //COMPUTER


  // variables

  let container;
  let camera;
  let renderer;
  let scene;
  let computer;

  function init() {

    const container = document.getElementById('scene');

    // create scene
    scene = new THREE.Scene();

    const fov = 25;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.01;
    const far = 1000;

    // camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 22);



    const ambient = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambient);


    const light = new THREE.DirectionalLight(0xffffff, 5);
    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 1);
    container.appendChild(renderer.domElement);

    // Loaders
    let loader = new GLTFLoader();
    loader.load("./3d/scene.gltf", function (gltf) {
      scene.add(gltf.scene);
      computer = gltf.scene.children[0];
      renderer.render(scene, camera);
      computer.rotation.z = 0.3;
      animate();
    });
  }


  function onclick() {
    setTimeout(function () {
      const power_button = document.getElementById("power_button");
      const windows_loading_screen = document.getElementById("windows_loading_screen");
      const project_computer_desktop = document.getElementById("project_computer_desktop");
      power_button.style.display = "none";
      project_computer_desktop.scrollIntoView({ behavior: 'smooth' });
      windows_loading_screen.addEventListener("ended", function () {
        windows_loading_screen.play();
      });
      window.addEventListener("resize", () => {
        project_computer_desktop.scrollIntoView({ behavior: 'smooth' });
      })
      document.documentElement.style.overflowY = "clip";
      var targetPosition = new THREE.Vector3(-0.056945 - 0.007365, 0.39962 - 0.12688, 1.9450000000000003 + -6.364999999999999);
      var targetRotation = { z: -0.079000000000000018 };

      new TWEEN.Tween(camera.position)
        .to(targetPosition, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

      new TWEEN.Tween(computer.position)
        .to({ z: -6.364999999999999 }, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

      new TWEEN.Tween(computer.rotation)
        .to(targetRotation, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

      const project_computer_side = document.getElementById("project_computer_side");
      const windows_login = document.getElementById("windows_login");
      const winodws_login_box = document.getElementById("windows_login_box");
      const windows_login_password = document.getElementById("windows_login_password");
      const windows_login_enter = document.getElementById("windows_login_enter");
      const windows_login_wrong_password = document.getElementById("windows_login_wrong_password");
      const windows_screen = document.getElementById("windows_screen");


      setTimeout(function () {
        if (camera.position.z >= 1.9450000000000003 + -6.364999999999999) {
          project_computer_desktop.classList.add("project_computer_desktop_active");
          windows_login.style.display = "none";
          windows_screen.style.display = "none";
          windows_loading_screen.classList.add("windows_loading_screen_active");
        }
        setTimeout(function () {
          windows_loading_screen.style.display = "none";
          setTimeout(function () {
            const windows_login_password = document.getElementById("windows_login_password");
            windows_login.classList.add("windows_login_active");
            windows_login.style.transition = "all 1s ease";
            windows_login.style.display = "block";
            windows_login_password.addEventListener("keyup", (e) => {
              if (e.key === "Enter") {
                if (windows_login_password.value == "nuribostan") {
                  console.log("correct");
                  windows_login.style.display = "none";
                  windows_screen.style.display = "block";
                  windows_screen.classList.add("windows_screen_active");
                } else {
                  windows_login_wrong_password.classList.add("windows_login_wrong_password_active");
                }
              }
            });

            windows_login_enter.addEventListener("click", () => {
              if (windows_login_password.value == "nuribostan") {
                console.log("correct");
                windows_login.style.display = "none";
                windows_screen.style.display = "block";
                windows_screen.classList.add("windows_screen_active");
              } else {
                windows_login_wrong_password.classList.add("windows_login_wrong_password_active");
              }
            })
          }, 100);
        }, 3000);
      }, 2000);
    }, 300);

  }

  function afterClose() {

    document.documentElement.style.overflowY = "visible";
    var ComputerPosition = new THREE.Vector3(0, 0, 15);
    var ComputerRotation = { z: 0.3 };

    new TWEEN.Tween(camera.position)
      .to(ComputerPosition, 2000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    new TWEEN.Tween(computer.position)
      .to({ z: -6.364999999999999 }, 2000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    new TWEEN.Tween(computer.rotation)
      .to(ComputerRotation, 2000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    setTimeout(function () {
      const checkbox = document.getElementById("checkbox");
      checkbox.checked = false;
    }, 1000);
  }

  const windows_login_close_button = document.getElementById("windows_login_close_button");

  windows_login_close_button.addEventListener("click", () => {
    windows_start_menu.classList.remove("windows_start_menu_active");
    windows_screen.classList.remove("windows_screen_active");
    setTimeout(function () {
      const windows_screen = document.getElementById("windows_screen");
      const project_computer_desktop = document.getElementById("project_computer_desktop");
      const scene = document.getElementById("scene");
      const project_computer_side = document.getElementById("project_computer_side");
      windows_loading_screen.style.display = "block";
      project_computer_desktop.classList.remove("project_computer_desktop_active");
      project.style.display = "block";
      project_computer_side.style.display = "inline-block";
      scene.style.display = "flex";
      setTimeout(function () {
        afterClose();
        power_button.style.display = "block";
        setTimeout(function () {
        }, 600);
      }, 500);
    }, 100);
  });

  turn_off_com.addEventListener("click", () => {
    windows_start_menu.classList.remove("windows_start_menu_active");
    windows_screen.classList.remove("windows_screen_active");
    setTimeout(function () {
      const windows_screen = document.getElementById("windows_screen");
      const project_computer_desktop = document.getElementById("project_computer_desktop");
      const scene = document.getElementById("scene");
      const project_computer_side = document.getElementById("project_computer_side");
      windows_loading_screen.style.display = "block";
      project_computer_desktop.classList.remove("project_computer_desktop_active");
      project.style.display = "block";
      project_computer_side.style.display = "inline-block";
      scene.style.display = "flex";
      setTimeout(function () {
        afterClose();
        power_button.style.display = "block";
        setTimeout(function () {
        }, 600);
      }, 500);
    }, 100);
  });


  power_button.addEventListener("click", onclick);


  function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    renderer.render(scene, camera);
  }

  if (window.innerWidth >= 768) {
    init();
  } else {
    const power_button = document.getElementById("power_button");
    power_button.style.display = "none";
  }


});

const project_folder_icon = document.getElementById("project_folder_icon");
const project_folder_inside = document.getElementById("project_folder_inside");

project_folder_icon.addEventListener("dblclick", () => {
  project_folder_inside.classList.add("project_folder_inside_active");
})

project_folder_inside.addEventListener('mousedown', function (event) {
  let shiftX = event.pageX - project_folder_inside.getBoundingClientRect().left;
  let shiftY = event.pageY - project_folder_inside.getBoundingClientRect().top;

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    project_folder_inside.style.left = pageX - shiftX + 'px';
    project_folder_inside.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  project_folder_inside.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', onMouseMove);
    project_folder_inside.onmouseup = null;

  });

});

const project_folder_inside_close = document.getElementById("project_folder_inside_close");

project_folder_inside_close.addEventListener("click", () => {
  project_folder_inside.classList.remove("project_folder_inside_active");
});


const windows_start_button_ = document.getElementById("windows_start_button_");
const windows_start_menu = document.getElementById("windows_start_menu");
const turn_off_com = document.getElementById("turn_off_com");
const project_div = document.querySelectorAll("#project div");

windows_start_button_.addEventListener("click", () => {
  windows_start_menu.classList.toggle("windows_start_menu_active");
});

//PROJECT MOBİLE VERSION

const project_mobile_version = document.getElementById("project_mobile_version");
const project_mobile_box = ["project_box_bg1", "project_box_bg2", "project_box_bg3", "project_box_bg4", "project_box_bg5", "project_box_bg6"];
const project_box_bg = document.querySelectorAll(".project_box_bg");
const table = document.getElementById("table");

if (window.innerWidth < 768) {
  project_mobile_version.style.display = "flex"
  project_computer_side.style.display = "none"
  table.style.display = "none"
  power_button.style.display = "none"
} else {
  project_mobile_version.style.display = "none"
}

window.addEventListener("scroll", () => {
  let project_mobile_scroll = project_mobile_version.scrollTop;
  console.log("mb_sc: " + project_mobile_scroll);
  let box_scroll = 0;
  for (let i = 1; i <= 6; i++) {
    if (window.scrollY >= 6200 + box_scroll) {
      document.getElementById(project_mobile_box[i - 1]).classList.add("project_box_bg_active");
    }
    box_scroll += 130;
  }
});

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width / 2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}


/*---------------------------------------SKILLS PROGRESS BAR----------------------------------*/

function loadSkills() {
  var html = document.querySelector("li.html");
  var css = document.querySelector("li.css");
  var javascript = document.querySelector("li.javascript");
  var react = document.querySelector("li.react");
  const skills_box = document.getElementById("skills_box");
  const scrollPosition = window.scrollY;

  if (skills_box) {
    const targetPosition = skills_box.getBoundingClientRect().top + window.pageYOffset;
    if (scrollPosition >= targetPosition - 500) {
      fillBar(html, 90);
      fillBar(css, 90);
      fillBar(javascript, 70);
      fillBar(react, 40);
      window.removeEventListener("scroll", loadSkills);
    }
  }





}

function fillBar(skill, percent) {
  var bar = skill.querySelector(".bar");
  var percentDisplay = skill.querySelector(".percent");
  var width = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + "%";
      percentDisplay.innerHTML = width + "%";
    }
  }
}

window.addEventListener("scroll", loadSkills);

