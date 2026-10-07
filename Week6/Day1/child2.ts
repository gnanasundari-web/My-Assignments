import { Browser } from "./parentClass";

class Edge extends Browser
{
    launchBrowser()
    {
        console.log("Launching Edge Browser");
    }
}

let child2 = new Edge();
child2.launchBrowser();
child2.browserType();
child2.browserVersion();