export default function Usuario(props){
    const {src,nome,nome2}= props
    return (
        <div class="usuario">
            <img src={src} />
            <div class="texto">
              <strong>{nome}</strong>
              {nome2}
            </div>
          </div>
    )
}