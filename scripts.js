
var searchBar = document.getElementById('searchBar');

searchBar.addEventListener('click', openClose, false);

function openClose() {

    if(searchBar.getAttribute('class') == 'waiting') {

        //searchBar.style.width = "200px";
        //searchBar.style.borderRadius = "20px";
        //searchBar.style.cursor = "auto";

        //var circleClick = document.createAttribute('id');
        //circleClick.value = "opened";
        searchBar.setAttribute('id', 'opened');
    }
}
