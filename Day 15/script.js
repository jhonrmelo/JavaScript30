const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// takes from the local storage of page and set in the list
const items = JSON.parse(localStorage.getItem('items')) || [];
const CheckButton = document.querySelector('.Checkall');
const unCheckButton = document.querySelector('.Uncheckall');
CheckButton.addEventListener('click', checkall);
unCheckButton.addEventListener('click',UncheckAll);

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}


function populateList(plates = [], plateslist) {
    plateslist.innerHTML = plates.map((plate, i) => {
        return `
    <li>
        <input type = "checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for ="item${i}"> ${plate.text} </label>
    </li>
    `;
    }).join('');
}
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('onchange', console.log('pinto'));

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem);

populateList(items, itemsList);

function checkall() {
    var checkeboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0, n = checkeboxes.length; i < n; i++) {
        checkeboxes[i].checked = true;
        items[i].done = true;
    }
    localStorage.setItem('items', JSON.stringify(items));
}

function UncheckAll(){
    console.log('got here');
    var checkeboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0, n = checkeboxes.length; i < n; i++) {
        checkeboxes[i].checked = false;
        items[i].done = false;
    }
    localStorage.setItem('items', JSON.stringify(items));
}