import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {
    
    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this.quantidade * this._valor;
    }

    paraTexto(): void{

        console.log('-- paraTexto --');
        console.log(
            `Data: ${this._data}
            Quantidade: ${this._quantidade}, 
            Valor: ${this._valor}, 
            Volume: ${this.volume}`
        );

    }

    ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
        && this.data.getMonth() == negociacao.data.getMonth()
        && this.data.getFullYear() == negociacao.data.getFullYear();

    }
}