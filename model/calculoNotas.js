const gerarNotas = function(valorNota1, valorNota2, valorNota3, valorNota4){

    let  nota1 = valorNota1;
    let nota2 = valorNota2;
    let nota3 = valorNota3;
    let nota4 = valorNota4;
    let media;
    let status = false;


if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
    console.log('ERRO: Demonstrar todos os valores')
}else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
    console.log('ERRO: É obrigatoria a entrada de dados')
} 
else{
    nota1 = Number (nota1);
    nota2 = Number (nota2);
    nota3 = Number (nota3);
    nota4 = Number (nota4);

    if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100  || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
        console.log ('Notas invalidas, cerique-se de que todas as suas notas estão ente 0 e 100')
        

    }




}
}