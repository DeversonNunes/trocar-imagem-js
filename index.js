const imagens=document.querySelectorAll('.slide')
const setaVoltar=document.getElementById(" seta-voltar")

const setaAvancar=document.getElementById("seta-avancar")

 let imagemAtual = 0;

 setaAvancar.addEventListener('click',function () {
if (imagemAtual === imagens.length -1) {
    return ;
    
}
  esconderImagemAberta();

  imagemAtual++;

  imagens[imagemAtual].classList.add('mostrar')

  mostrarOuEsconderSetas()
 })

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostrarOuEsconderSetas() {
    const naoEAprimeiraImagem= imagemAtual !== 0;
    if (naoEAprimeiraImagem) {
        setaVoltar.classList.remove('opacidade')
    }else{
        setaVoltar.classList.add('opacidade')
    }

    const chegouUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;
    if (chegouUltimaImagem) {
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
    
}

setaVoltar.addEventListener('click',()=>{
    if (imagemAtual=== 0) {
        return
    }
    esconderImagemAberta()
    imagemAtual--;
    imagens[imagemAtual].classList.add('mostrar')
})

