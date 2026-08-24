const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

// Função para fechar o modal
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const nameInput = document.querySelector(".popup__input_type_name");
  const descriptionInput = document.querySelector(
    ".popup__input_type_description",
  );

  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  const editPopup = document.querySelector("#edit-popup");
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".popup__input_type_name");
  const descriptionInput = document.querySelector(
    ".popup__input_type_description",
  );

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  const editPopup = document.querySelector("#edit-popup");
  closeModal(editPopup);
}

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", handleOpenEditModal);

const editPopupCloseButton = document.querySelector(
  "#edit-popup .popup__close",
);
editPopupCloseButton.addEventListener("click", () => {
  const editPopup = document.querySelector("#edit-popup");
  closeModal(editPopup);
});

const editProfileForm = document.querySelector("#edit-profile-form");
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((card) => {
  console.log(card.name);
});
