const TABS = {};
const eventsSubtabs = {
  'pageUnidadAcademica': function eventsUnidadAcademicaTab(){
    const tableUA = document.getElementById('tableUA'),
          tableTUA = document.getElementById('tableTUA'),
          tableWrapper =  document.querySelector('.table-wrapper');

    const tables = {
      [tableUA.id]: tableUA.innerHTML,
      [tableTUA.id]: tableTUA.innerHTML
    };

    tableUA.remove();
    tableTUA.remove();

    Array.from(document.querySelectorAll('.page-nav__tab')).forEach(tab => {
      if(tab.classList.contains('active')) tableWrapper.innerHTML = tables[tab.getAttribute('table-target')];

      tab.addEventListener('click', e => {
        tableWrapper.innerHTML = tables[e.target.getAttribute('table-target')];
        tableWrapper.style.width = (e.target.getAttribute('table-target') === 'tableUA') ? '60vw' : '';
      });
    });
  }
};

// functions
function loadTab(tabname){
  let container = document.getElementById('main');

  container.innerHTML = TABS[tabname];
  loadPagenavTabEvent();
}


// Load tabs
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
    eventsSubtabs[nextTab.getAttribute('tab-target')]();
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
