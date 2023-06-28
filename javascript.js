window.onload = () => {
  let open = document.getElementById("verified");
  let close = document.getElementById("close");
  let modalScreen = document.getElementById("modal-screen");
  let moreButton = document.getElementById("more-button");
  let moreModalLeft = document.getElementById("more-modal");
  let draftButton = document.getElementById("draft-button");
  let draftsScreen = document.getElementById("draft-screen");
  let draftCloseButton = document.getElementById("draft-close");

  // ------------------------------------------------------------>
  open.addEventListener("click", function openModal() {
    console.log("verified");
    modalScreen.style.display = "block";
  });

  close.addEventListener("click", function closeModal() {
    modalScreen.style.display = "none";
  });

  moreButton.addEventListener("click", function openMoreModal() {
    moreModalLeft.style.display = "block";
  });

  draftButton.addEventListener("click", function openDraftModal() {
    draftsScreen.style.display = "block";
    moreModalLeft.style.display = "none";
  });

  draftCloseButton.addEventListener("click", function closeDraftModal() {
    draftsScreen.style.display = "none";
  });

  openModal();
  closeModal();
  openMoreModal();
  openDraftModal();
  closeDraftModal();
};
