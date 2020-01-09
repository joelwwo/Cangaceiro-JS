class NegociacaoController {

    adiciona(event) {

        event.preventDefault();

        let $ = sel => document.querySelector(sel)
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');
        
        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));




    }

}