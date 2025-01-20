export class Product{
    private id: string;
    private name: string;
    private supplier: string;
    constructor(id:string, name:string, supplier:string) {
        this.id = id
        this.name = name
        this.supplier = supplier
    }
    public getid():string {
        return this.id
    }
    public getname():string {
        return this.name
    }
    public setname(name:string):void {
        this.name = name
    }
    public getsupplier():string {
        return this.supplier
    }
    public setsupplier(supplier:string):void {
        this.supplier = supplier
    }
    public toString():string {
        return `Product[ID = ${this.id},Name=${this.name},Supplier=${this.supplier}]`
    }
}