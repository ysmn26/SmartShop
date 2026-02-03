function calculerTotal() {
    let total = 0;
    const lignes = document.querySelectorAll("#panier-body tr");

    lignes.forEach(ligne => {
        const prix = parseFloat(ligne.querySelector(".prix").innerText);
        let quantite = parseInt(ligne.querySelector("input").value);

        if (quantite < 1 || isNaN(quantite)) {
            quantite = 1;
            ligne.querySelector("input").value = 1;
        }

        const sousTotal = prix * quantite;
        ligne.querySelector(".soustotal").innerText = sousTotal + " DA";
        total += sousTotal;
    });

    document.getElementById("total").innerText = total + " DA";
}

function supprimerProduit(element) {
    element.closest("tr").remove();
    calculerTotal();
}

window.onload = calculerTotal;
