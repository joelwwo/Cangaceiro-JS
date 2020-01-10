class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-'));

        //let data = new Date(this._inputData.value.replace(/-/g, ','));

        // dessa forma o mês fica sempre um a mais, 0 (janeiro) ao 11 (dezembro)
        //let data = new Date(...this._inputData.value.split('-'));

        /* let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => {
                    if (indice == 1) {
                        return item - 1
                    }
                    return item;
                })
        ); */

        /* let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => {
                    return item - indice % 2;
                })
        ); */

        /* let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        console.log(data.toDateString()); */

        let converter = new DataConverter();

        let data = converter.paraData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        let diaMesAno = converter.paraTexto(data)

        console.log(negociacao)

        console.log(diaMesAno);
        




    }

}