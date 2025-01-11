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
            const card =document.createElement("div")
            card.className="produit-card";
            const h2=document.createElement("h2");
            const descrpt=document.createElement("p");
            h2.className="padding";
            descrpt.className="padding";
            descrpt.textContent=element.description;
            h2.textContent=element.nom;


            


            const image=document.createElement("img");
            image.src=element["image-url"];

            produitContainer.appendChild(card)
            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(descrpt);
           
       });
       const serviceContainer=document.getElementById("MK2");
       data.services.forEach(element=>{
            const h2=document.createElement("h2");
            const dept=document.createElement("p");
            h2.textContent=element.nom;
            dept.textContent=element.description;
            h2.className="title";
            let btn=document.createElement("button");
            btn.textContent="EN SAVOIR PLUS"
            btn.className="B1";

            
            serviceContainer.appendChild(h2);
            serviceContainer.appendChild(dept);
            serviceContainer.appendChild(btn);
       });
       const temoignagesContainer=document.getElementById("MK3");
       data.temoignages.forEach(element => {
            const card=document.createElement("div")
            card.className="temoignages-card";
            const prenom=document.createElement("h3");
            const typeExperience=document.createElement("h4");
            const commentaire=document.createElement("p");
            const note=document.createElement("li");
            
            prenom.textContent=element.prenom;
            typeExperience.textContent=element.typeExperience;
            commentaire.textContent=element.commentaire;
            note.textContent=element.note;
        
           temoignagesContainer.appendChild(card);
           card.appendChild(prenom);
           card.appendChild(typeExperience);
           card.appendChild(commentaire);
           card.appendChild(note);

       });
       console.log(data);
       
    })
    .catch(error => console.error('Error:', error));
