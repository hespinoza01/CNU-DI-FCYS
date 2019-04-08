const TABS = {};

function loadTab(tabname){
  let container = document.getElementById('main');

  container.innerHTML = TABS[tabname];
  loadPagenavTabEvent();
}

Array.from(document.querySelectorAll('.tab')).forEach(node => {
  const TAB = document.getElementById(node.getAttribute('tab-target'));

  if(TAB){
    TABS[TAB.id] = TAB.innerHTML;
    TAB.remove();
  }

   if(node.classList.contains('active')) loadTab(node.getAttribute('tab-target'));

  node.addEventListener('click', e => {
    e.preventDefault();

    let prevTab = document.querySelector('.tab.active'),
        nextTab = e.target;

    prevTab.classList.remove('active');
    nextTab.classList.add('active');
    loadTab(nextTab.getAttribute('tab-target'));
  });
});


// page-nav__tab event's
function loadPagenavTabEvent() {
  function changeBtnAddNewTextContent(textContent){
    let btnAddNew = document.querySelector('.btnAddNew');

    if(btnAddNew && textContent[textContent.length - 1] === "s") textContent = textContent.slice(0, -1);
    btnAddNew.textContent = `Nuevo ${textContent}`;
  }

  Array.from(document.querySelectorAll('.page-nav__tab')).forEach(node => {

    if(node.classList.contains('active')) changeBtnAddNewTextContent(node.textContent.toLowerCase());

    node.addEventListener('click', e => {
      let prevTab = document.querySelector('.page-nav__tab.active'),
        nextTab = e.target;

      prevTab.classList.remove('active');
      nextTab.classList.add('active');

      changeBtnAddNewTextContent(nextTab.textContent.toLowerCase());
    });
  });
}
