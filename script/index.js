const tabs = Array.prototype.slice.apply(document.querySelectorAll('.tab-item'));
const tabContainer = document.getElementById('tabs');
const tabHighlighter = document.getElementById('highlighter');
const tabsWidth = tabContainer.offsetWidth;
const urlBase="https://donasweetfactory.herokuapp.com/donas";

document.documentElement.style.setProperty('--num-tabs', tabs.length);

tabContainer.addEventListener('click', e => {
  if (e.target.classList.contains('tab-item')) {
      let item = tabs.indexOf(e.target);
      tabs.map(tab => tab.classList.remove('active'));
      tabs[item].classList.add('active');

      tabHighlighter.style.transform = `translateX(${(tabsWidth / tabs.length) * item }px)`;
  }
});

const getDonas= async()=> {
  console.log(getDonas);
  const response= await fetch(`${urlBase}`)
  const donas= response.json()
  return donas
  
}