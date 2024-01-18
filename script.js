// NVVJhsZ6PlqkL2gXNZsRjNqVhxusYPUXEdyKYFW0IAPZmolJtCPhPMI0
const docApi = () => {
  const pURL = " https://api.pexels.com/v1/search?query=cats";
  fetch(pURL, {
    headers: {
      authorization: "NVVJhsZ6PlqkL2gXNZsRjNqVhxusYPUXEdyKYFW0IAPZmolJtCPhPMI0",
    },
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((nuovaimm) => {
      console.log(nuovaimm);
      let immagini = document.getElementsByTagName("img");
      immagini = Array.from(immagini);
      immagini.foreach((element, i) => {
        setAttribute("src", immagini[i].src);
      });
      const abc = nuovaimm.photos;
      console.log(immagini);
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
docApi();
