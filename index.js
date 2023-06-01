// Active Nav Link 
var nav = document.getElementById("navId");
nav.innerHTML = `<ul class="navbar-nav justify-content-around w100p">
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="index.html">
    <div class="navCircle mx-auto d-flex justify-content-center">
        <div class="navIcon navIcon1 my-auto"></div>
    </div>
    <p>Performance</p>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="incentive.html">
    <div class="navCircle mx-auto d-flex justify-content-center">
        <div class="navIcon navIcon2 my-auto"></div>
    </div>
    <p>Incentives</p>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="policy-detail.html">
    <div class="navCircle mx-auto d-flex justify-content-center">
        <div class="navIcon navIcon3 my-auto"></div>
    </div>
    <p>Policy</p>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="leaderBoard.html">
    <div class="navCircle mx-auto d-flex justify-content-center">
        <div class="navIcon navIcon4 my-auto"></div>
    </div>
    <p>Leaderboard</p>
  </a>
</li>
</ul>`
var btns = nav.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

