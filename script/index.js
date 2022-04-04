import { deleteDona, getDonas } from "./donas.js";
import { getCard } from "./getCard.js";

const tabs = Array.prototype.slice.apply(
  document.querySelectorAll(".tab-item")
);
const tabContainer = document.getElementById("tabs");
const tabHighlighter = document.getElementById("highlighter");
const tabsWidth = tabContainer.offsetWidth;

document.documentElement.style.setProperty("--num-tabs", tabs.length);

tabContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item")) {
    let item = tabs.indexOf(e.target);
    tabs.map((tab) => tab.classList.remove("active"));
    tabs[item].classList.add("active");

    tabHighlighter.style.transform = `translateX(${
      (tabsWidth / tabs.length) * item
    }px)`;
  }
});

const allDonas = document.getElementById("contenedorAll");
window.addEventListener("DOMContentLoaded", () => {
  getDonas().then((donas) => {
    donas.forEach((item) => {
      allDonas.innerHTML += getCard(item);
    });
  });
});

const all = document.getElementById("all");
const cream = document.getElementById("cream");
const nutela = document.getElementById("nutela");
const arequipe = document.getElementById("arequipe");
const donasContainer = document.getElementById("contenedorAll");

all.onclick = () => {
    getDonas().then((donas) => {
    donasContainer.innerHTML = ""
    donas.forEach((item) => {
      donasContainer.innerHTML += getCard(item);
    });
  });
};

cream.onclick = () => {
  getDonas("cream").then((donas) => {
    donasContainer.innerHTML = "";
    donas.forEach((item) => {
      donasContainer.innerHTML += getCard(item);
    });
  });
};

nutela.onclick = () => {
  getDonas("nutela").then((donas) => {
    donasContainer.innerHTML = "";
    donas.forEach((item) => {
      donasContainer.innerHTML += getCard(item);
    });
  });
};
arequipe.onclick = () => {
  getDonas("arequipe").then((donas) => {
    donasContainer.innerHTML = "";
    donas.forEach((item) => {
      donasContainer.innerHTML += getCard(item);
    });
  });
};
