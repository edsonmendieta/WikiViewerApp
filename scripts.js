
var searchBar = document.getElementById('searchBar');

searchBar.addEventListener('click', openClose, false);

function openClose() {

    var handle = document.getElementById('line');

    if(searchBar.getAttribute('class') == 'waiting') {

        handle.setAttribute('id', 'lineGone');

        searchBar.setAttribute('id', 'openedBar');
    }
}
