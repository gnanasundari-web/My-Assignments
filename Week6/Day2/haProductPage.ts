import { BasePage } from "./haAbstractClass"; //importing abstract class
import { PageRules } from "./haInterface";   //importing interface

class ProductPage extends BasePage implements PageRules
{
    verifyPage()            //implementation of interface method
    {
        console.log("Product Page Verified");
    }
    searchProduct() 
    {
        console.log("Search for the product entered");
        
    }

    addToCart()
    {
        console.log(("Product has been added to the cart"));
        
    }
}

let pp=new ProductPage()
pp.waitForPageLoad()
pp.verifyPage()
pp.searchProduct()
pp.addToCart()
pp.getPageTitle()