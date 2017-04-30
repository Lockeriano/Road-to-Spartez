var counterBtn = document.getElementsByClassName("btn-counter"),
    article = document.getElementsByClassName("article"), 
    newestBtn = document.getElementById("newest"),
    listItem = document.getElementsByTagName("li"),
    popularBtn = document.getElementById("popular");

var refreshFilter = function(){
  for (var i = 0; i < counterBtn.length; i++) {
    if (listItem[1].className === "active" && counterBtn[i].dataset.count === "0") {
      article[i].style.display = "none";
    };
  };
};

function favourite (e) {
  e.preventDefault();
  if (this.dataset.count >= 1){
    this.dataset.count--;
  } else {
    this.dataset.count++;
  };
  refreshFilter();
};

function popularFilter (e) {
  e.preventDefault();
  listItem[0].className = "";
  listItem[1].className = "active";
  for (var i = 0; i < article.length; i++) {
    for (var i = 0; i < counterBtn.length; i++) {
      if (counterBtn[i].dataset.count !== "0"){
        article[i].style.display = "inline-block";
      } else {
        article[i].style.display = "none";
      };
    };
  };
};

function newestFilter (e) {
  e.preventDefault();
  listItem[1].className = "";
  listItem[0].className = "active";
  for (var i = 0; i < article.length; i++) {
    article[i].style.display = "inline-block";
  };
};


for (var i = 0; i < counterBtn.length; i++) {
  counterBtn[i].addEventListener('click', favourite);
};

popularBtn.addEventListener('click', popularFilter);
newestBtn.addEventListener('click', newestFilter);