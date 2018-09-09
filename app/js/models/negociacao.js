System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                }
                get data() {
                    return this._data;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get valor() {
                    return this._valor;
                }
                get volume() {
                    return this.quantidade * this._valor;
                }
                paraTexto() {
                    console.log('-- paraTexto --');
                    console.log(`Data: ${this._data}
            Quantidade: ${this._quantidade}, 
            Valor: ${this._valor}, 
            Volume: ${this.volume}`);
                }
                ehIgual(negociacao) {
                    return this.data.getDate() == negociacao.data.getDate()
                        && this.data.getMonth() == negociacao.data.getMonth()
                        && this.data.getFullYear() == negociacao.data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
