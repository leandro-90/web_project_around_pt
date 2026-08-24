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

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteButtonClick(evt) {
  evt.target.closest(".card").remove();
}

function handleImageClick(name, link) {
  const imagePopup = document.querySelector("#image-popup");
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupCaption = imagePopup.querySelector(".popup__caption");

  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}

function getCardElement({
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
} = {}) {
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", handleLikeButtonClick);
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", handleDeleteButtonClick);
  cardImage.addEventListener("click", () => handleImageClick(name, link));

  return cardElement;
}

function renderCard(name, link, container) {
  container.prepend(getCardElement({ name, link }));
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardForm = evt.target;
  const cardPopup = document.querySelector("#new-card-popup");
  renderCard(
    cardForm.elements["place-name"].value,
    cardForm.elements.link.value,
    document.querySelector(".cards__list"),
  );
  cardForm.reset();
  closeModal(cardPopup);
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

const newCardPopup = document.querySelector("#new-card-popup");
document
  .querySelector(".profile__add-button")
  .addEventListener("click", () => openModal(newCardPopup));
newCardPopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closeModal(newCardPopup));
document
  .querySelector("#new-card-form")
  .addEventListener("submit", handleCardFormSubmit);

const imagePopup = document.querySelector("#image-popup");
imagePopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closeModal(imagePopup));

const cardsList = document.querySelector(".cards__list");
initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsList);
});
