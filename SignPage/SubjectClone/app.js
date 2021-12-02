var nav_bar = document.getElementsByClassName("header-nav");
var left_container = document.getElementsByClassName('left-container-chapter');
var title_bar = document.getElementById("title-bar");

window.addEventListener("scroll", function() {

    var scroll_y = this.scrollY;
    var top_title = 80;

    var tmp = 0;
    tmp = top_title - scroll_y;

    if (tmp < 0) {
        tmp = 0;
    }

    title_bar.style.top = tmp.toString() + "px";
    left_container.item(0).style.top = tmp.toString() + "px";

});

//marked chapter
let marked = document.getElementsByClassName('fa-star');

for (let i = 0; i < marked.length; i++) {

    marked[i].addEventListener('click', clickMarked);

    function clickMarked() {
        // let $color = marked[i].style;
        let $color = window.getComputedStyle(marked[i]);

        if ($color.color === "rgb(255, 255, 0)") {
           marked[i].style.color = 'black';
        }
        else marked[i].style.color = 'yellow';
    }
}

//open home page
let homePage = document.getElementById('fa-home');
homePage.addEventListener('click', openHome);

function openHome() {
    window.open('../HomeCourse/index.html', '_self');
}

// open forum html
let forumPage = document.getElementById('container-forum');
forumPage.addEventListener('click', openForum);

function openForum() {
    window.open('../ForumPage/forum.html', '_self');
}


//open list courses
// let listCourse = document.getElementById('my-subjects');

// listCourse.addEventListener('click', openListCourses);

// function openListCourses() {
//         let contentCourse = document.getElementById('nav-subjects');

//         if (contentCourse.style.display != 'none') {
//             contentCourse.style.display = 'none';
//         }
//         else {
//             contentCourse.style.display = 'inline-block';
//         }
//     }

// content  note chapters
let note = document.getElementsByClassName('fa-pen');

for (let i = 0; i < note.length; i++) {
    const element = note[i];

    element.addEventListener('click', openListCourse);

    function openListCourse() {
        let textArea = element.childNodes[3];

        if (window.getComputedStyle(textArea).display == 'none') {
            textArea.style.display = 'inline-block';
        }
        else {
            textArea.style.display = 'none';
        }

    } 
}

// dropdown subject 
let btnSubject=document.getElementById('btn-subject');
btnSubject.addEventListener('click', dropdownFun);
function dropdownFun() {
    document.getElementsByClassName('content-subject')[0].classList.toggle('show');
}