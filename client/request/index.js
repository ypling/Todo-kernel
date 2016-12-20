let _host = '/graphql';

export function setHost(host){
  _host = host + '/graphql';
}
export default function request(query, variables) {
  return fetch(_host, {
    method: 'post',
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    }),
    body: JSON.stringify({
      query,
      variables
    })
  }).then(response => response.json()).then(json => json.data)
}