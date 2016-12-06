const host = '/graphql';
export default function request(query, variables) {
  return fetch(host, {
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