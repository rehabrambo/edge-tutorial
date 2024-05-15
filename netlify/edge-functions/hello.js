export default async (request, context) => {
    
context.log("Calling hello.js Edge Function");
    
    return new Response("Hello World from the edge!", {
        headers: {
            "Content-type": "text/html",
        },
    });
};