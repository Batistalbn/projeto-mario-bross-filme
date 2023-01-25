const buttonTrailer = document.querySelector(".info-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const video = document.getElementById("video");

const linkVideo = video.src;

const toggleModal = () => {
  modal.classList.toggle("open");
};

buttonTrailer.addEventListener("click", toggleModal);

closeModal.addEventListener("click", () => {
  toggleModal();
  video.setAttribute("src", "");
  video.setAttribute("src", linkVideo);
});
