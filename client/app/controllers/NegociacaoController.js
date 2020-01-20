class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacoes = ProxyFactory.create(
            new Negociacoes(),
            ['adiciona', 'esvazia'],
            model => this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);

        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ['texto'],
            model => this._mensagemView.update(model)
        );

        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);

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
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();

    }

    apaga() {

        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações excluídas com sucesso!';

    }

}