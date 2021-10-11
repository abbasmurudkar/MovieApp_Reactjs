const ApiBase_Url = 'https://api.tvmaze.com';

export async function getapi(querystring){
    const Api =await fetch(`${ApiBase_Url}${querystring}`).then((r)=>r.json())
    return Api
}