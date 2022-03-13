import Imagem from "./Imagem";
import Usuario from "./Usuario";
import Post from "./Post";
import  Sugestao from "./Sugestao";
import Icon from "./Icon";
export default  function Corpo(){
    return (
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">
              <Imagem />
            <div class="setinha">
              <Icon nome="chevron-forward-circle"/>
            </div>
          </div>
         
          <div class="posts">
          <Post/>
          
            
          </div>
        </div>

        <div class="sidebar">
          <Usuario src="assets/img/catanacomics.svg" nome='catanacomics' nome2='Catana' />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            <Sugestao />
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>

    )
}