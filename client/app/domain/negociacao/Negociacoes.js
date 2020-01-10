class Negociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adicionaNegociacoes(negociacao) {

        this._negociacoes.push(negociacao);

    }

    paraArray(){

        return this._negociacoes;

    }

}