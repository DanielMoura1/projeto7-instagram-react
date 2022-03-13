export default function Sugestao(props){
    const sugestao = [{img:'assets/img/bad.vibes.memes.svg',nome:'bad.vibes.memes',razao:'Segue você'},{img:"assets/img/chibirdart.svg",nome:'chibirdart',razao:'Segue você'},{img:"assets/img/razoesparaacreditar.svg",nome:'razoesparaacreditar',razao:'Novo no Instagram'},{img:"assets/img/adorable_animals.svg",nome:'adorable_animals',razao:'Segue você'},{img:"assets/img/smallcutecats.svg",nome:'smallcutecats',razao:'Segue você'}]
    return(
        sugestao.map(sugestaos => <div class="sugestao">
        <div class="usuario">
          <img src={sugestaos.img} />
          <div class="texto">
            <div class="nome">{sugestaos.nome}</div>
            <div class="razao">{sugestaos.razao}</div>
          </div>
        </div>
    
        <div class="seguir">Seguir</div>
      </div>)
    
    )
}