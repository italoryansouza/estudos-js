//Consumindo Api utilizando o Fetch API

const URL = "https://jsonplaceholder.typicode.com/users";



async function callApi() {
    const resp = await fetch(URL);  
    if(resp.status === 200){
        const obj = await resp.json();
        
        obj.forEach(id => {
            
            console.log(obj.name)
        });
    }
};

callApi();