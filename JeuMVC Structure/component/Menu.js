// import menu from '../config/menu.js';

export class Menu extends HTMLElement{

    constructor (){
        super();
        this.innerHTML= `
        <ul>
            <li> <a href="/">Accueil</a>  </li>  
            <li> <a href="/regles" data-link="/regles"> REGLES DU JEU</a>  </li>  
            <li> <a href="/etape1"data-link="/etape1"> JOUER</a>  </li>  
            <li> <a href="#"> FAQ</a>  </li>  
            <li> <a href="/authentification" data-link="/authentification"> CONNEXION </a>  </li>  
        </ul>
        
        `
    }
}