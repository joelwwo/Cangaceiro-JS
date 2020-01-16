class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update();

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }

    _criaNegociacao() {

        let data = DataConverter.paraData(this._inputData.value);

        return new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

    }

    adiciona(event) {

        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());

        this._limpaFormulario();

    }

}