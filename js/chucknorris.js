/******************************************************************************
 * SCRIPT CHUCK NORRIS - W11
 ******************************************************************************/

/*-----------------------------------------------------------------------------
 * Cette fonction est exécutée au chargement de la page qui inclut ce script et
 * réalise les deux opérations suivantes :
 * 1) ajouter un écouteur d'événements de type "click" au bouton "random" de la
 * page pour lancer l'exécution de la fonction searchRandomJoke()
 * 2) exécuter la fonction loadCategories()
 */
window.onload = function() {
  let bouton = document.getElementById('rand');
  bouton.addEventListener("click",function(e){
    e.preventDefault();
    searchRandomJoke();

    })
  // loadCategories(); soit le bouton search marche, soit l'affichage des autre
  //bouton se fait..
}



/*-----------------------------------------------------------------------------
 * Cette fonction utilise l'API Fetch pour lancer une requête R2 vers le
 * serveur https://api.chucknorris.io et obtenir une blague aléatoire. Lorsque
 * les données sont retournées au format JSON, la fonction updateJoke() est
 * appellée. S'il y a une erreur, elle est inscrite dans la console et affichée
 * dans une popup.
 */
function searchRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(function(response) {
    if (response.ok)
    return response.json();
    throw new Error('Response is not Ok');
})
  .then (function (data){
    updateJoke(data);
})
  .catch (function (error){
    console.log(error.message);
});
}

/*-----------------------------------------------------------------------------
 * Cette fonction parcourt le contenu du paramètre data (au format JSON) et
 * affiche la blague dans l'élément HTML de la page courante dont l'attribut
 * "id" est "joke". Le code HTML généré est de la forme suivante :
 *     <article id="joke">
 *         <img src="URL de l'icône" alt="N/A">
 *         <p>Texte de la blague</p>
 *         <p>Catégorie de la blague, "N/A" si pas de catégorie</p>
 *     </article>
 */
function updateJoke(data) {
  let article1=document.getElementById('joke');
  let image=data.icon_url;
  article1.innerHTML=`<img src=${image}><p>${data.value}</p><p id=cat>${data.category}</p>`
}

/*-----------------------------------------------------------------------------
 * Cette fonction utilise l'API Fetch pour lancer une requête R1 vers le
 * serveur https://api.chucknorris.io et obtenir la liste des catégories.
 * Lorsque les données sont retournées au format JSON, la fonction
 * updateCatégories() est appellée. S'il y a une erreur, elle est inscrite dans
 * la console.
 */
function loadCategories() {
  fetch('https://api.chucknorris.io/jokes/categories')
  .then(function(response) {
    if (response.ok)
    return response.json();
    throw new Error('Response is not Ok');
})
  .then (function (data2){
    updateCategories(data2);
})
  .catch (function (error){
    console.log(error.message);
});
}

/*-----------------------------------------------------------------------------
 * Cette fonction parcourt le contenu du paramètre data (un tableau de
 * catégories) en utilisant une boucle "for". Pour chaque catégorie :
 * 1) un élément HTML de type "<button>" est créé
 * 2) le nom de la catégorie est ajouté au contenu du bouton
 * 3) un écouteur d'événement de type "click" est ajouté au bouton pour
 *    déclancher l'exécution de la fonction searchJokeFromCategorie()
 * 4) le bouton est ajouté à la page comme enfant de l'élément HTML dont
      l'attribut "id" est "categories"
 */
function updateCategories(data2) {
  let article2=document.getElementById('categories');
  for (j=0;j<15;j++){
    article2.innerHTML+=`<button>${data2[j]}</button>`;

  }

}

/*-----------------------------------------------------------------------------
 * Cette fonction utilise l'API Fetch pour lancer une requête R3 vers le
 * serveur https://api.chucknorris.io et obtenir une blague. La catégorie de la
 * blague correspond au contenu de l'élément qui a déclenché l'événement
 * 'event', accessible via 'event.target'. Lorsque les données sont retournées
 * au format JSON, la fonction updateJoke() est appellée. S'il y a une erreur,
 * elle est inscrite dans la console et affichée dans une popup.
 */
function searchJokeFromCategorie(event) {
}
