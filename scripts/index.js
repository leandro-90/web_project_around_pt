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

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  clearPopupForm(modal);
}

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);
const editPopup = document.querySelector("#edit-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileForm = document.querySelector("#edit-profile-form");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardButton = document.querySelector(".profile__add-button");
const newCardForm = document.querySelector("#new-card-form");
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const popups = [...document.getElementsByClassName("popup")];
const forms = [...document.getElementsByClassName("popup__form")];

function showInputError(input) {
  const errorElement = input.parentElement.querySelector(".popup__error");

  input.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__error_visible");
  errorElement.textContent = input.validationMessage;
}

function hideInputError(input) {
  const errorElement = input.parentElement.querySelector(".popup__error");

  input.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
}

function updateSubmitButton(form) {
  const submitButton = form.querySelector(".popup__button");

  submitButton.disabled = !form.checkValidity();
}

function clearPopupForm(popup) {
  const form = popup.querySelector(".popup__form");

  if (!form) {
    return;
  }

  form.reset();
  form.querySelectorAll(".popup__input").forEach(hideInputError);
  form.querySelector(".popup__button").disabled = true;
}

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  editProfileForm.querySelectorAll(".popup__input").forEach(hideInputError);
  updateSubmitButton(editProfileForm);
  openModal(editPopup);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

function handleLikeButtonClick(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteButtonClick(event) {
  event.target.closest(".card").remove();
}

function handleImageClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}

function getCardElement({
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
} = {}) {
  const cardElement = document.importNode(
    cardTemplate.content.querySelector(".card"),
    true,
  );
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  likeButton.addEventListener("click", handleLikeButtonClick);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  cardImage.addEventListener("click", () => handleImageClick(name, link));

  return cardElement;
}

function renderCard(name, link, container) {
  container.prepend(getCardElement({ name, link }));
}

function handleCardFormSubmit(event) {
  event.preventDefault();

  const cardForm = event.target;
  renderCard(
    cardForm.elements["place-name"].value,
    cardForm.elements.link.value,
    cardsList,
  );
  closeModal(newCardPopup);
}

editProfileButton.addEventListener("click", handleOpenEditModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

newCardButton.addEventListener("click", () => {
  clearPopupForm(newCardPopup);
  openModal(newCardPopup);
});
newCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsList);
});

forms.forEach((form) => {
  const inputs = [...form.querySelectorAll(".popup__input")];

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.validity.valid) {
        hideInputError(input);
      } else {
        showInputError(input);
      }

      updateSubmitButton(form);
    });
  });
});

popups.forEach((popup) => {
  popup.querySelector(".popup__close").addEventListener("click", () => {
    closeModal(popup);
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup_is-opened");

    if (openPopup) {
      closeModal(openPopup);
    }
  }
});
