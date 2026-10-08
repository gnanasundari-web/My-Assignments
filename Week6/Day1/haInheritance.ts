class WebComponent{
selector: string

constructor(selector: string)  //constructor
{
    this.selector=selector
}
click(){
    console.log(`Mouse is clicked ${this.selector}`);
    
}
focus()
{
    console.log(`Component is focused ${this.selector}`);
    
}

}


class Button extends WebComponent
{
    click(){            //click method is overridden
        console.log(`Click is simulated for ${this.selector} button`);
        super.click()       //calling click method of Base class
        
    }
}

class TextInput extends WebComponent{
    value: String=""

    enterText(text: string){
        this.value=text
        console.log(`${this.value} has been entered into the ${this.selector}`)
    }
}

function testComponent()
{
    let button=new Button("#password")     //Instantiation of classes
    let text=new TextInput("#username")

    button.click();
    button.focus();
    console.log(button.selector)
    text.enterText("Sundari")
    text.click()
    text.focus()
    console.log(text.selector)
    
}

testComponent()