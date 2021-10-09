const ApiBase_Url = "https://api.tvmaze.com";

export async function getapi(querystring){
    const api = await fetch(`${ApiBase_Url}${querystring}`).then(r=>r.json())
    return api
}