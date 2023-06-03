/*******************************************************************
 ************************* DONNEES GLOBALES ************************
 ******************************************************************/
 let toDos;
 let ulList;
 let addButton;
 
 /*******************************************************************
  **************************** FONCTIONS ***************************
  ******************************************************************/
  /**
  * Permet de créer un input de type checkbox
  * @param {bool} checked
  * @param {integer} id
  * @returns checkbox
  */
  function createCheckBox(checked, id) {
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('title', id);
  checked ? checkBox.setAttribute('checked', 'checked') : '';
  checkBox.classList.add('me-3');
  return checkBox;
  }
  /**
  * Permet de créer un nouveau bouton de suppression
  * @param {integer} id : de l'élèment à supprimer
  * @returns buttonElement
  */
  function createDeleteButton(id) {
  const delBtn = document.createElement('button');
  delBtn.innerHTML = "x";
  delBtn.setAttribute('title', id);
  delBtn.className = "btn btn-danger float-end delButtons";
  return delBtn;
  }
  /**
  * Permet de créer un li avec la classe list-group-item
  * @returns li
  */
  function createListGroupItem() {
  // créer un nouvel élément li
  const li = document.createElement('li');
  // ajouter la classe list-group-item à l'élément li
  li.className = "list-group-item";
  return li;
  }
  /**
  * Insère un todo dans la liste des toDos
  * @param {object} todo
 Page 8 of 8 */
 function injectToDoInDom(todo) {
    // créer un nouvel élément li
    const li = createListGroupItem();
    // ajouter un checkbox comme premier fils à l'élément li
    li.appendChild(createCheckBox(todo.completed, todo.id));
    // ajouter le titre du todo comme deuxième fils à l'élément li
     const title = document.createTextNode(todo.title);
    // vérifier si le Todo est completed, le titre sera alors barré 
    if (todo.completed) {
    const stroke = document.createElement('del');
    stroke.appendChild(title);
    li.appendChild(stroke);
    } else {
    li.appendChild(title);
    }
    // ajouter le boutton de suppression comme deuxième fils à l'élément li
     li.appendChild(createDeleteButton(todo.id));
    // ajouter l'élément li comme premier fils à la ulList
    ulList.appendChild(li);
    } 
ulList=document.querySelector(".list-group")
let adButton=document.getElementById("addButton")
adButton.addEventListener('click', onClickAddButton)

  function displayToDos() {
    ulList.innerHTML = ""; // Supprime le contenu de la liste avant l'affichage // tester si le tableau est vide alors afficher dans ul un seul li : No Todos
    if (toDos.length==0)   
    {
        const li = createListGroupItem();
        let textli = document.createTextNode("no todos")
        li.appendChild(textli)
        ulList.appendChild(li)
    }    
    else {
        toDos.forEach(element => {
            injectToDoInDom(element)
        });
    }
    
    

        installEventListener('input[type=checkbox]', 'change', onChangeCheckbox); 
        installEventListener('button.delButtons', 'click', onClickDeleteButton);

      }
 /******************************************************************* ************************** CODE PRINCIPAL ************************* ******************************************************************/  // code à compléter
 toDos = loadDataFromLocalStorage('toDos') ?? [];
 displayToDos(); 