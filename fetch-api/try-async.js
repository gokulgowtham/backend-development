const url = "https://jsonplaceholder.typicode.com/users";

export async function getData() {
    try{
        let resp = await fetch(url);
        console.log(resp.status);
        if(!resp.ok) throw new Error("Network response was not ok");
        let data = await resp.json();
        console.log(data);
    }
    catch(err) {
        console.log("Error: ", err);
    }
}