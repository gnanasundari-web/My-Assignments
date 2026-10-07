import { Browser } from "./parentClass";

class Chrome extends Browser    
{
    launchBrowser()
    {
        console.log("Launching Chrome Browser");
    }
}

let child1 = new Chrome();
child1.launchBrowser();
child1.browserType();
child1.browserVersion();
