/**
 * Gestion de mon shopping
 * pour ajouter et supprimer 
 * un article.
 */

// variable
var listItemCanna = [];
var listHtml = document.getElementById("list-canna");
var inputItem = document.getElementById("item");

// ajouter item dans la liste
function addItem() {
    listItemCanna.push(inputItem.value);
    updateList();
}

function removeItem(id) {
    console.log(id);
    listItemCanna.splice(0, parseInt(id));
    document.getElementById("data-" + id).remove();
    updateList();
}


// function pour mettre a jour la liste
function updateList() {
    //supprimer tous les élément enfantqs html
    if (listItemCanna.length > 0) {
        while (listHtml.firstChild) {
            listHtml.removeChild(listHtml.firstChild);
        }
    }

    // ajouter et mettre a jour l'élément html
    for (let i = 0; i < listItemCanna.length; i++) {
        var li = document.createElement("li");
        var data = document.createTextNode(listItemCanna[i]);
        var button = document.createElement("a");
        var buttoni = document.createElement("i");
        buttoni.setAttribute("class", "las la-trash");
        button.setAttribute("href", "#");
        button.setAttribute("id", i);
        button.setAttribute("onclick", "removeItem('" + i + "')");
        button.appendChild(buttoni);
        li.appendChild(data);
        li.appendChild(button);
        li.setAttribute("id", "data-" + i);

        listHtml.appendChild(li);
    }
}