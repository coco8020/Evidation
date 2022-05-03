// var desktopPath = document.querySelector("#desktopPath");
// var desktopPathLength = desktopPath.getTotalLength();

// desktopPath.style.strokeDasharray = desktopPathLength + " " + desktopPathLength;
// desktopPath.style.strokeDashoffset = desktopPathLength;
// desktopPath.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var drawLength = desktopPathLength * scrollPercentage;
//   desktopPath.style.strokeDashoffset = desktopPathLength - drawLength;
//   if (scrollPercentage >= 0.99) {
//     desktopPath.style.strokeDasharray = "none";
//   } else {
//     desktopPath.style.strokeDasharray =
//       desktopPathLength + " " + desktopPathLength;
//   }

//   var mobileScrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var mobileDrawLength = mobilePathLength * mobileScrollPercentage;
//   mobilePath.style.strokeDashoffset = mobilePathLength - mobileDrawLength;
//   if (mobileScrollPercentage >= 0.99) {
//     mobilePath.style.strokeDasharray = "none";
//   } else {
//     mobilePath.style.strokeDasharray =
//       mobilePathLength + " " + mobilePathLength;
//   }
// });

// Prevent background scroll when hamb menu is open

// if ($("#mob-menu").is(":visible")) {
//   $("body").addClass("fixed-position");
//   console.log("fixed class added");
// } else {
//   $("body").removeClass("fixed-position");
//   console.log("fixed class removed");
// }

var timesClicked = 0;
const hambButton = document.getElementById("hambButton");

hambButton.addEventListener("click", function (event) {
  timesClicked++;

  if (timesClicked % 2 == 0) {
    document.body.style["overflow"] = "auto";
    document.getElementById("nav").classList.add("cc-nav-show-hide");
  } else {
    document.body.style["overflow"] = "hidden";
    document.getElementById("nav").classList.remove("cc-nav-show-hide");
  }
});

// Skip to main
$(document).ready(function () {
  var t = document.getElementById("skip-link");
  t &&
    t.addEventListener("click keydown", function (t) {
      if ("keydown" !== t.type || 13 === t.which) {
        t.preventDefault();
        var e = document.getElementById("main");
        e.setAttribute("tabindex", "-1"), e.focus();
      }
    });
});

// // Hide Similar Posts

// var similarPosts = document.querySelector(".w-dyn-empty");
// console.log(similarPosts);

// function hideSimilarPosts() {
//   if ((similarPosts = null)) {
//     console.log("hola");
//   } else {
//     document
//       .getElementById("#similarPostsTitle")
//       .setAttribute("display", "none");
//   }
// }

// hideSimilarPosts();

function showResults() {
  var countVisible = document.querySelectorAll(
    ".resources_collection-item:not([style='display: none;'])"
  ).length;
  console.log(countVisible);
  $("#resultsNumber").text(countVisible);
}

showResults();

document.querySelectorAll(".filters_checkbox-field").forEach((item) => {
  item.addEventListener("click", (event) => {
    setTimeout(showResults(), 3000);
  });
});
