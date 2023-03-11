import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

const nav1 = document.getElementById('nav-color-1');
const nav2 = document.getElementById('nav-color-2');
const nav3 = document.getElementById('nav-color-3');
const menuItem = document.getElementById('menu-item');
const button = document.getElementById('button');
const loaderId = document.getElementById('loader');
const loader = document.querySelector('.loader2');
const loaderBox = document.getElementById('loader-box');
const firstFour = document.querySelectorAll('.first-four');
const middle = document.querySelectorAll('.middle');
const lastFour = document.querySelectorAll('.last-four');
const main = document.getElementById('main');
const loaderImg = document.getElementById('loader-img');
const SectionAbout = document.getElementById('about');
const SectionProjects = document.getElementById('projects');

// menu animation

button.addEventListener("click", () => {
  menuItem.classList.toggle("active-menu-item");
  nav1.classList.toggle("active1");
  nav2.classList.toggle("active2");
  nav3.classList.toggle("active3");
})



// loader animation
window.addEventListener("DOMContentLoaded", () => {
  main.style.display = "none";
  SectionAbout.style.display = "none";
  SectionProjects.style.display = "none";
  firstFour[firstFour.length - 1].style.display = "block";
  lastFour[0].style.display = "block";
  // first timeout

  setTimeout(() => {
    firstFour.forEach((item, idx) => {
      setTimeout(() => {
        item.style.opacity = "1";
      }, 100 * (firstFour.length - idx))
    })

    lastFour.forEach((item, idx) => {
      setTimeout(() => {
        item.style.opacity = "1";
      }, 100 * (idx + 1))
    })

    // second timeout
    setTimeout(() => {
      middle.forEach((item, idx) => {
        setTimeout(() => {
          middle[0].style.opacity = "0";
        }, 100 * ((idx) + 1))
      })

      firstFour.forEach((item, idx) => {
        setTimeout(() => {
          item.style.opacity = "0";
        }, 100 * (firstFour.length - idx))
      })

      lastFour.forEach((item, idx) => {
        setTimeout(() => {
          item.style.opacity = "0";
        }, 100 * (idx + 1))
      })

      // third timeout
      setTimeout(() => {
        firstFour.forEach((item, idx) => {
          setTimeout(() => {
            loaderImg.style.opacity = "1";
            item.style.opacity = "1";
          }, 100 * (idx + 1))
        })

        lastFour.forEach((item, idx) => {
          setTimeout(() => {
            item.style.opacity = "1";
          }, 100 * (lastFour.length - idx))
        })

        middle.forEach((item, idx) => {
          setTimeout(() => {
            item.style.opacity = "1";
          }, 550 * (idx + 1))

          // fourth timeout
          setTimeout(() => {
            middle.forEach((item, idx) => {
              setTimeout(() => {
                item.style.opacity = "0";
                loaderImg.style.opacity = "0";
                middle[0].style.opacity = "1";
              }, 100 * (idx + 1))
            })

            firstFour.forEach((item, idx) => {
              setTimeout(() => {
                item.style.opacity = "0";
              }, 100 * (idx + 1))
            })

            lastFour.forEach((item, idx) => {
              setTimeout(() => {
                item.style.opacity = "0";
              }, 100 * (lastFour.length - 1 - idx))
            })

            // fifth timeout
            setTimeout(() => {
              middle[0].style.color = "#f5eddd";
              loaderBox.style.backgroundColor = "black"
              setTimeout(() => {
                middle[0].classList.add("middle-active");
              }, 600)
              setTimeout(() => {
                loaderId.classList.add("loader2-active");
                setTimeout(() => {
                  main.style.display = "flex";
                  SectionAbout.style.display = "flex";
                  SectionProjects.style.display = "flex";
                }, 100)
              }, 1500)
            }, 1000)
          }, 800)
        })

      }, 400)

    }, 600)
  }, 100)

})


window.addEventListener("DOMContentLoaded", () => {


  window.addEventListener("scroll", () => {
    const titleCopy1 = document.getElementById("title_copy_1");
    const titleCopy2 = document.getElementById("title_copy_2");
    const titleCopy3 = document.getElementById("title_copy_3");
    const titleCopy4 = document.getElementById("title_copy_4");

    var scroll_ = 0;
    var scroll2_ = 0;
    var scroll_ = window.scrollY;

    if (scroll_ <= 250) {
      titleCopy1.style.opacity = "0";
      titleCopy2.style.opacity = "0";
      titleCopy3.style.opacity = "0";
      titleCopy4.style.opacity = "0";
    }

    if (scroll_ >= 300) {
      titleCopy1.style.opacity = "1";
      titleCopy2.style.opacity = "1";
      titleCopy3.style.opacity = "1";
      titleCopy4.style.opacity = "1";
      titleCopy1.style.transition = " opacity 0.3s ease-in-out";
      titleCopy2.style.transition = "opacity 0.3s ease-in-out";
      titleCopy3.style.transition = "opacity 0.3s ease-in-out";
      titleCopy4.style.transition = "opacity 0.3s ease-in-out";
    }

    var control = 5;
    var windowSize2 = 0;
    windowSize2 = window.innerWidth;

    if(windowSize2 >= 2560){
      if (scroll_ >= 900) {
        while (control < 200) {
          scroll2_ += 10;
          control += 1;
          if (scroll_ >= (890 + scroll2_)) {
            titleCopy1.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 0.5 + ")";
            titleCopy2.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1 + ")";
            titleCopy3.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.5 + ")";
            titleCopy4.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.8 + ")";
          }
        }
      }
    }

    if(windowSize2 >= 1440){
      if (scroll_ >= 600) {
        while (control < 200) {
          scroll2_ += 10;
          control += 1;
          if (scroll_ >= (590 + scroll2_)) {
            titleCopy1.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 0.5 + ")";
            titleCopy2.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1 + ")";
            titleCopy3.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.5 + ")";
            titleCopy4.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.8 + ")";
          }
        }
      }
    }

    if (scroll_ >= 900) {
      while (control < 200) {
        scroll2_ += 10;
        control += 1;
        if (scroll_ >= (890 + scroll2_)) {
          titleCopy1.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 0.5 + ")";
          titleCopy2.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1 + ")";
          titleCopy3.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.5 + ")";
          titleCopy4.style.transform = "matrix(1, 0, 0, 1, 0, " + control * 1.8 + ")";
        }
      }
    }


  })
})

window.addEventListener("DOMContentLoaded", () => {

  const aboutTitle = document.getElementById('about_title_');
  const aboutContent = document.getElementById('about_content');

  window.addEventListener("scroll", () => {
    var windowSize =0;
    windowSize = window.innerWidth;
    var scroll = 0;
    var scroll = window.scrollY;
    console.log(scroll);
    console.log(windowSize);

    var yAxis = -650;
    var yAxis2 = 0;
    var scroll2 = 0;
    var scroll3 = 0;

    if(windowSize >= 2560){
      var yAxis = -1550;
      if (scroll >= 700) {
        while (yAxis < 2100) {
          scroll2 += 10;
          yAxis += 8.7;
          if (scroll >= (690 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 500) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize >= 1920){
      var yAxis = -900;
      if (scroll >= 700) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (690 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }


    if(windowSize >= 1440){
      var yAxis = -650;
      if (scroll >= 700) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (690 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize >= 1080){
      var yAxis = -650;
      if (scroll >= 500) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 7.2;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize >= 1024){
      var yAxis = -850;
      if (scroll >= 500) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize >= 768){
      var yAxis = -850;
      if (scroll >= 500) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize >= 425){
      var yAxis = -850;
      if (scroll >= 500) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }
    
    if(windowSize >= 375){
      var yAxis = -950;
      if (scroll >= 500) {
        while (yAxis < 2400) {
          scroll2 += 10;
          yAxis += 8.5;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }


    if(windowSize >= 320){
      var yAxis = -950;
      if (scroll >= 500) {
        while (yAxis < 2450) {
          scroll2 += 10;
          yAxis += 8.8;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }

    if(windowSize < 320){
      var yAxis = -1100;
      if (scroll >= 500) {
        while (yAxis < 2500) {
          scroll2 += 10;
          yAxis += 6.8;
          if (scroll >= (490 + scroll2)) {
            aboutContent.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis + ")";
          }
        }
      }


      if (scroll >= 300) {
        while (yAxis2 < 400) {
          scroll3 += 10;
          yAxis2 += 8;
          if (scroll >= (290 + scroll3)) {
            aboutTitle.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis2 + ")";
          }
        }
      }

    }
  })
})


/*PROJECTS*/

const project = document.getElementById("project_title");
const project_box = document.getElementById("project_box");
const project_main = document.getElementById("project_main");

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    var scroll5 = 0
    scroll5 = window.scrollY;
    var yAxis3 = -150;
    var scroll6 = 0;
    if(scroll5 >= 3300){
      while(yAxis3 < 3500){
        scroll6 += 10;
        yAxis3 += 12;
        if(scroll5 >= (3490 + scroll6)){
          project.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis3 + ")";
        }
      }
    }

    if(scroll5 == 4500){
      project_box.style.animation = "animate_project2 7s ease-in-out infinite alternate"
    }else if (scroll5 < 4000) {
      project_box.style.animation = "animate_project2 7s ease-in-out infinite alternate"
    }

    var scroll7 = 0;
    var yAxis4 = 0;
    if(scroll5 >= 5000){
      while(yAxis4 != -600){
        yAxis4 -= 10;
        scroll7 += 8;
        if(scroll5 >= (4990 + scroll7)){
          project_main.style.transform = "matrix(1, 0, 0, 1, 0, " + yAxis4 + ")";
        } 
      }
    }
  })
})



const project_canvas = document.getElementById("canvas-1");

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    var project_scroll = 0;
    project_scroll = window.scrollY;
    var project_yAxis = 10;
    var project_scroll2 = 0;
    if(project_scroll > 2800){
      while(project_yAxis > -1000){
        project_scroll2 += 10;
        project_yAxis -= 30;
        if(project_scroll > (2800 + project_scroll2)){
          project_canvas.style.transform = "matrix(1, 0, 0, 1, 0, " + project_yAxis + ")";
        }
      }
    }
  })
})


// variables

let container;
let camera;
let renderer;
let scene;
let computer;

function init() {

  container = document.querySelector('.scene');

  // create scene
  scene = new THREE.Scene();

  const fov = 25;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 200;

  // camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-0.2, 0, 18);

  if(window.innerWidth < 600){
    camera.position.set(-0, 0, 18);
  }

  if(window.innerWidth < 400){
    camera.position.set(-0, 0, 20);
  }


  const ambient = new THREE.AmbientLight(0x404040, 5);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 5);
  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
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

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
    camera.position.z = 18 + t * 0.01;
    camera.position.x =-0.08+ t * -0.000001;
    camera.position.y = t * -0.0002;


  console.log(window.scrollY);
}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}



init();



