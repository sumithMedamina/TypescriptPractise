import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate{

        Name: string ="Iphone";
        Price: number=98000.89;
        Qty: number=3;
        Total(): number {
            return this.Qty*this.Price;
        }
        Print(): void {
            console.log(
                `Name=${this.Name}\n
                Price=${this.Price}\n
                Qty=${this.Qty}\n
                Total=${this.Total()}`
            )
        }

}