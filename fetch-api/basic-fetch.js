const url = "https://jsonplaceholder.typicode.com/users";

export async function getData() {
    fetch(url)
    .then((resp)=> {
        if(!resp.ok) throw new Error("Network response was not ok");
        console.log(resp.status);
        return resp.json();
    })
    .catch((err)=> {
        console.log(err);
    })
    async function getData2() {
        let response = await fetch(url);
        if(!response.ok) throw new Error("Network response was not ok");
        console.log(response.status);
        return response.json();
    }
    const response = getData2();
    
}