export default function Imagem(props){
const {src,texto} =props
const conteudo = [{imgg:"assets/img/9gag.svg",text:'9gag'},{imgg:"assets/img/meowed.svg",text:'meowed'},{imgg:"assets/img/barked.svg",text:'barked'},{imgg:"assets/img/nathanwpylestrangeplanet.svg" ,text:'nathanwpylestrangeplanet'},{imgg:"assets/img/wawawicomics.svg",text: 'wawawicomics'},{imgg:"assets/img/respondeai.svg",text:'respondeai'},{imgg:"assets/img/filomoderna.svg" ,text:'filomoderna'},{imgg:"assets/img/memeriagourmet.svg",text: 'memeriagourmet'},]
    return (
      conteudo.map(conteudos => <div class="story">
      <div class="imagem">
       <img src={conteudos.imgg}/>
     </div>
     <div class="usuario">
       {conteudos.text}
     </div>
 </div>)
      
      )    
  }