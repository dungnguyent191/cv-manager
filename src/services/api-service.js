export class ApiService {
  static getDataFromLink = async (projectLink) => {
    var data = { key: 'c9168d19197c8dfb7b7f966aa1ceab8f', q: projectLink }
    let result = await fetch('https://api.linkpreview.net', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(response => {
        return response;
      })
    console.log('api result:', result);
    return result;
  }
}