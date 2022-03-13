export default function Post(props){
    const posts =[{img:"assets/img/meowed.svg",texto:'meowed',img2:'assets/img/gato-telefone.svg',cutidaImg:"assets/img/respondeai.svg" ,nome:'respondeai',num:'101.523'},{img:"assets/img/barked.svg",texto:'barked',img2:"assets/img/dog.svg",cutidaImg:"assets/img/adorable_animals.svg" ,nome:'adorable_animals',num:'99.159 '}]
    return (
        posts.map(post => <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={post.img} />
            {post.texto}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={post.img2}  />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={post.cutidaImg} />
            <div class="texto">
              Curtido por <strong>{post.nome}</strong> e <strong>outras {post.num} pessoas</strong>
            </div>
          </div>
        </div>
      </div>)
        
    )
}