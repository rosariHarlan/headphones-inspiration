// ---------- Modal ----------

const modal = document.querySelector("#subscribe-option");
const btn = document.querySelector("#subscription");
const closeBtn = document.querySelector(".close");

// Open the modal
btn.addEventListener("click", (e) => {
  modal.style.display = "block";
});

// Close the modal
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});
