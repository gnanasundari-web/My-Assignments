class APIClient 
{
    sendRequest(endpoint: string, requestbody: string, requeststatus: boolean): void
    sendRequest(endpoint: string): void

    //Implementation of overloading method. 
    sendRequest(endpoint: string, requestbody?: string, requeststatus?: boolean): void 
    {
        if (requestbody) 
        {
            console.log(`Request Body "${requestbody}" is sent to the endpoint url "${endpoint}" and the status is ${requeststatus}`)
        }
        else 
        {
            console.log(`Endpoint URL is "${endpoint}"`);

        }
    }
}

let objclient = new APIClient();  //Creating object for the class
objclient.sendRequest("https:google.com")
objclient.sendRequest("https:google.com", "Search for cats", true)  //Passing values as arguments
//objclient.sendRequest("URL", "Body")   //Tried to send 2 arguments, will clarify it with Gautami.