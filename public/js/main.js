const TABS = {};

    /*function loadTab(tabname){
      let container = document.getElementById('content'),
          searchInput = document.getElementById('searchInput'),
          btnNew = document.getElementById('btnNew');

      container.innerHTML = TABS[tabname];
      searchInput.placeholder = `Search ${tabname.split('-')[0]}`;
      btnNew.textContent = `New ${(tabname === "books-tab") ? "book" : "category"}`;
      btnNew.href = (tabname === "books-tab") ? "/book" : "/category";
    }*/

    Array.from(document.querySelectorAll('.tab')).forEach(node => {
      const TAB = document.getElementById(node.getAttribute('data-goto'));

      if(TAB){
        TABS[TAB.id] = TAB.innerHTML;
        TAB.remove();
      }

      // if(node.classList.contains('active')) loadTab(node.getAttribute('data-goto'));

      node.addEventListener('click', e => {
        e.preventDefault();

        let prevTab = document.querySelector('.tab.active'),
            nextTab = e.target;

        prevTab.classList.remove('active');
        nextTab.classList.add('active');
        // loadTab(nextTab.getAttribute('data-goto'));
      });
    });
