function search()
{
    let searchWord = document.getElementById("searchInput");
    let action = "https://www.jula.no/search/?query=" + searchWord;
    document.getElementById("action").action = action;
}