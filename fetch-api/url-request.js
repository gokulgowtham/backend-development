const urlString = "https://jsonplaceholder.typicode.com/users";
 export async function urlRequest() {
    const url = new URL(urlString);
    console.log('hostname: ', url.hostname);
    console.log('origin: ', url.origin);
    console.log('protocol: ', url.protocol);
    console.log('port: ', url.port);
    console.log('pathname: ', url.pathname);
    console.log('search: ', url.search);
    console.log('searchParams: ', url.searchParams);

    const request = new Request(url, {
        headers: {'x-gv': 'true'},
        method: 'GET',
        cache: 'no-cache',
    });

    const response = await fetch(request);
    console.log('response: ', response);
    console.log('response.status: ', response.status);
    console.log('response.statusText: ', response.statusText);
    console.log('response.headers: ', response.headers);
    console.log('response.body: ', response.body);
    console.log('response.json: ', response.json());
    console.log('response.text: ', response.text());
 }