import Icon from "./Icon";
export default function Navbar(){
    return(
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <Icon nome="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>
          
          <div class="logo-mobile">
            <Icon nome="logo-instagram" />
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <Icon nome="paper-plane-outline" />
            <Icon nome="compass-outline" />
            <Icon nome="heart-outline"/>
            <Icon nome="person-outline"/>
          </div>

          <div class="icones-mobile">
            <Icon nome="paper-plane-outline"/>
          </div>
        </div>
      </div>

    )
}