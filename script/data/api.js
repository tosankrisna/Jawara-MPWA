export const base_url = 'https://api.football-data.org/v2/';
export const token = '235eee4142ad4e849feb064922cf4728';

export function status(response) {
    if (response.status !== 200) {
        console.log(`Error : ${response.status}`);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

export function json(response) {
    return response.json();
}

export function error(error) {
    console.log(`Error : ${error}`)
}