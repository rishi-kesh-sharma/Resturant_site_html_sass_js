const navToggleBtn = document.querySelector(".nav-toggle-btn");

navToggleBtn.addEventListener("click", (e) => {
  navToggleBtn.querySelector("i").classList.toggle("fa-times");
  navToggleBtn.parentNode.querySelector(".nav-links").classList.toggle("show");
  navToggleBtn.parentNode
    .querySelector(".nav-features")
    .classList.toggle("show");
});
{
  /* <i class="fa fa-times" aria-hidden="true"></i> */
}
