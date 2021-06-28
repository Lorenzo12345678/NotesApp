import { Timestamp } from "rxjs";

export class Note{

    private _title: string;
    private _description: string;
    private _argument: string;
    // questa la fai dopo se riesci con la path dell'immagine trascinata sopra o di un set   private coverImage: string;
    private _creationDate : string;

    public get title(){
        return this._title;
    }
    public set title(value:string){
        this._title = value;
    }

    public get description(){
        return this._description;
    }
    public set description(value:string){
        this._description = value;
    }

    public get argument(){
        return this._argument;
    }
    public set argument(value:string){
        this._argument = value;
    }

    public get creationDate(){
        return this._creationDate;
    }
    public set creationDate(value : string){
        this._creationDate = value;
    }
    
    constructor(){
        this._creationDate = new Date().toLocaleDateString();
    }

} 