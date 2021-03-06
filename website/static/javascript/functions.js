function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  addActiveClassButton()
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
function addActiveClassButton() {
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("category-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("category-btn active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

function handleFirstLoading() {
  var filterContent = window.location.search;
  if (filterContent == '') {
    var allBtn = document.getElementById("all");
    allBtn.className = allBtn.className.replace("category-btn", "category-btn active");
    filterSelection("all");
  } else {
    var filterValue = filterContent.split("=")[1];
    if (filterValue == 'nlp') {
      var nlp_Btn = document.getElementById("nlp");
      nlp_Btn.className = nlp_Btn.className.replace("category-btn", "category-btn active");
      filterSelection("nlp");
    }
    if (filterValue == 'comp_vi') {
      var comp_vi_Btn = document.getElementById("comp_vi");
      comp_vi_Btn.className = comp_vi_Btn.className.replace("category-btn", "category-btn active");
      filterSelection("comp_vi");
    }
  }
}