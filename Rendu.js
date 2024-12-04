fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       const produitContainer=document.getElementById('MK1');
        data.produits.forEach(element => {
            const card=document.createElement("div")
            card.className="produit-card";
            const h2=document.createElement("h2");
            const descrpt=document.createElement("p");
            descrpt.textContent=element.description;
            h2.textContent=element.nom;


            


            const image=document.createElement("img");
            image.src=element["image-url"];

            produitContainer.appendChild(card)
            card.appendChild(h2);
            card.appendChild(descrpt);
            card.appendChild(image);
       });
       console.log(data);
       
    })
    .catch(error => console.error('Error:', error));
