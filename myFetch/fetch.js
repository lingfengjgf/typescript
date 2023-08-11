function myFetch(url, method, data) {
  return fetch(url, {
    body: data ? JSON.stringify(data) : "",
    method,
  }).then((res) => res.json());
}

myFetch.get = (url) => {
  return myFetch(url, "GET");
};

myFetch.post = (url) => {
  return myFetch(url, "POST");
};

export default myFetch;
