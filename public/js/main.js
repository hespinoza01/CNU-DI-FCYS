const TABS = {};
const eventsSubtabs = {
  'pageUnidadAcademica': function (){
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
  },

  'pageFinanciamiento': function () {
    const tableF = document.getElementById('tableF'),
      tableFF = document.getElementById('tableFF'),
      tableWrapper = document.querySelector('.table-wrapper');

    const tables = {
      [tableF.id]: tableF.innerHTML,
      [tableFF.id]: tableFF.innerHTML
    };

    tableF.remove();
    tableFF.remove();

    Array.from(document.querySelectorAll('.page-nav__tab')).forEach(tab => {
      if (tab.classList.contains('active')) tableWrapper.innerHTML = tables[tab.getAttribute('table-target')];

      tab.addEventListener('click', e => {
        tableWrapper.innerHTML = tables[e.target.getAttribute('table-target')];
      });
    });
  },

  'pageInvestigaciones': function () {
    const tableF = document.getElementById('tableI'),
      tableFF = document.getElementById('tableTI'),
      tableOther = document.getElementById('tableOther'),
      tableWrapper = document.querySelector('.table-wrapper');

    const tables = {
      [tableF.id]: tableF.innerHTML,
      [tableFF.id]: tableFF.innerHTML,
      [tableOther.id]: tableOther.innerHTML
    };

    tableF.remove();
    tableFF.remove();
    tableOther.remove();

    Array.from(document.querySelectorAll('.page-nav__tab')).forEach(tab => {
      if (tab.classList.contains('active')) tableWrapper.innerHTML = tables[tab.getAttribute('table-target')];

      tab.addEventListener('click', e => {
        tableWrapper.innerHTML = tables[e.target.getAttribute('table-target')];
      });
    });
  },

  'pageEventos': function () {
    const tableF = document.getElementById('tableE'),
      tableFF = document.getElementById('tableTE'),
      tableET = document.getElementById('tableET'),
      tableWrapper = document.querySelector('.table-wrapper');

    const tables = {
      [tableF.id]: tableF.innerHTML,
      [tableFF.id]: tableFF.innerHTML,
      [tableET.id]: tableET.innerHTML
    };

    tableF.remove();
    tableFF.remove();
    tableET.remove();

    Array.from(document.querySelectorAll('.page-nav__tab')).forEach(tab => {
      if (tab.classList.contains('active')) tableWrapper.innerHTML = tables[tab.getAttribute('table-target')];

      tab.addEventListener('click', e => {
        tableWrapper.innerHTML = tables[e.target.getAttribute('table-target')];
      });
    });
  },

  'pageProfesor': function () {
    const tableF = document.getElementById('tableP'),
      tableFF = document.getElementById('tableE'),
      tableWrapper = document.querySelector('.table-wrapper');

    const tables = {
      [tableF.id]: tableF.innerHTML,
      [tableFF.id]: tableFF.innerHTML
    };

    tableF.remove();
    tableFF.remove();

    Array.from(document.querySelectorAll('.page-nav__tab')).forEach(tab => {
      if (tab.classList.contains('active')) tableWrapper.innerHTML = tables[tab.getAttribute('table-target')];

      tab.addEventListener('click', e => {
        tableWrapper.innerHTML = tables[e.target.getAttribute('table-target')];
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

    let callback = eventsSubtabs[nextTab.getAttribute('tab-target')];
    if(callback) callback();
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
