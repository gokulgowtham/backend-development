let obj = {
    id: crypto.randomUUID(),
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    website: 'https://www.example.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
    },
};


export function getData() {
    let jsonString = JSON.stringify(obj);
    console.log('jsonString: ', jsonString);
    let file = new File([jsonString], 'data.json', {type: 'application/json'});

    let response = new Response(file, {
        status: 200,
        statusText: 'OK',
        headers: {
            'content-type': 'application/json',
            'content-length': file.size.toString(),
            'last-modified': new Date().toISOString(),
            'etag': `"${file.lastModified}"`,
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'expires': new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
            'date': new Date().toISOString(),
            'server': 'Node.js',
            'connection': 'keep-alive',
        }
    })

    console.log('response: ', response);
}