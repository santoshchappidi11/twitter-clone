window.onload = () => {
  let open = document.getElementById("verified");
  let close = document.getElementById("close");
  let modalScreen = document.getElementById("modal-screen");

  // ------------------------------------------------------------>
  open.addEventListener("click", function openModal() {
    console.log('verified')
    modalScreen.style.display = "block";
  });

  close.addEventListener("click", function closeModal() {
    modalScreen.style.display = "none";
  });

  openModal();
  closeModal();
};
