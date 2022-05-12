import { addCookieToButton, checkCookies } from "./modules/cookies.js";
import { checkColorMode, handleChangeColor } from "./modules/theme.js";
import { loadDB, getStoredAnimes } from "./modules/db.js";
import {
  handleSaveItem,
  removeSavedItems,
  showSavedItems,
} from "./modules/animeItem.js";

async function onLoad() {
  /* Agregamos la funcionalidad de crear cookies en el modal */
  addCookieToButton();
  /* Verficamos que la cookie se encuentre activa */
  checkCookies();
  /* Guardando un string con sessionStorage. Nota: Solo demostrativo */
  /*setSessionItems(); */

  /* Guardando items dentro del localStorage */
  // localStorage.setItem("tema", "dark");
  // localStorage.setItem("config", "saved"); */

  /* Accediendo al un valor guardadno dentro del localStorage */
  // console.log(localStorage.getItem("tema"));

  /* Habilitamos el poder cambiar el modo en el boton del tema */
  handleChangeColor();

  /* Verificamos si ya exisita un modo guardado en localStorage */
  checkColorMode();

  /* Iniciamos indexDB */
  await loadDB();

  /* Hacemos que el boton de cada anime-item guarde en indexDB mientras lo quitamos del DOM */
  handleSaveItem();

  const pathname = window.location.pathname.split("/");
  const location = pathname[pathname.length - 1];

  if (location === "index.html") {
    /* Verificamos que no se vuelva a mostrar un elemento guardado */
    removeSavedItems();
  } else {
    showSavedItems();
  }
}

onLoad();
