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
}

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);
const editPopup = document.querySelector("#edit-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const editProfileForm = document.querySelector("#edit-profile-form");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardButton = document.querySelector(".profile__add-button");
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const buttons = [...editProfileForm.getElementsByClassName("popup__button")];

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  if (editProfileForm.checkValidity()) {
    buttons[0].disabled = false;
  } else {
    buttons[0].disabled = true;
  }
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
  cardForm.reset();
  closeModal(newCardPopup);
}

editProfileButton.addEventListener("click", handleOpenEditModal);

editPopupCloseButton.addEventListener("click", () => {
  closeModal(editPopup);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

newCardButton.addEventListener("click", () => openModal(newCardPopup));
newCardPopupCloseButton.addEventListener("click", () =>
  closeModal(newCardPopup),
);
newCardForm.addEventListener("submit", handleCardFormSubmit);

imagePopupCloseButton.addEventListener("click", () => closeModal(imagePopup));

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsList);
});

// Seleciona os elementos principais.
const popups = [...document.getElementsByClassName("popup")];
const forms = [...document.getElementsByClassName("popup__form")];
const buttonEdit = [...document.getElementsByClassName("buttonEdit")];

// Percorre todos os elementos de form.
forms.forEach((form, i) => {
  // Seleciona todos os elementos que vamos trabalhar.
  const inputs = [...form.getElementsByClassName("popup__input")];
  const spanError = [...form.getElementsByClassName("popup__error")];
  const buttons = [...form.getElementsByClassName("popup__button")];

  //  Percorre todos os elementos de entrada de inputs e faz sua leitura dos dados.
  inputs.forEach((input, i) => {
    input.addEventListener("input", () => {
      if (!form.checkValidity()) {
        // Ativa e desativa o botão submit baseado na leitura dos dados.
        buttons[0].disabled = true;
        input.classList.add("popup__input_type_error");
        spanError[i].classList.remove("popup__error");
        spanError[i].classList.add("popup__error_visible");
        spanError[i].textContent = input.validationMessage;
      } else {
        buttons[0].disabled = false;
        input.classList.remove("popup__input_type_error");
        spanError[i].classList.add("popup__error");
        spanError[i].textContent = "";
      }
    });
  });
});

popups.forEach((popup) => {
  // Selecionar todos os que existem no document.
  popup.addEventListener("click", (event) => {
    // Adicionar evento de click aos popups.
    if (event.target.classList.contains("popup_is-opened")) {
      // Verifica se os popups estão abertos e remove a classe que os mostra.
      popup.classList.toggle("popup_is-opened");
    }
  });
  document.addEventListener("keydown", (event) => {
    // Adicionar evento de teclado no docuemnt.
    if (event.key === "Escape") {
      // Verifica se a tecla pressionada é a tecla ESC e remove o popup aberto.
      popup.classList.remove("popup_is-opened");
    }
  });
});
