// function nb_aleatoire(min, max)
// {
//      var nb = min + (max-min+1)*Math.random(); 
//      return Math.floor(nb); 
// }

// var nb = nb_aleatoire(1, 100);
// var cpt = 0;
// var saisie;
// var msg = 'Devinez le chiffre qui est entre 1 et 100';

// do

// {
//      saisie = prompt(msg);
//      cpt++;
//      // message a afficher au prochain tour :
//      if(saisie > nb)
//           msg = "C'est -";
//      else
//           msg = "C'est +";
// }

// while(saisie != nb);

// alert("Cool, tu as trouvé en " + cpt + " coup(s)");



nb = document.getElementById("nb");
bouton = document.getElementById("bouton");
msg = document.getElementById("msg");
saisie = Math.floor(Math.random() * 100) //renvoi un x nombre //nombre flottant aleatoire
cpt = 0;

function tester() {
    
    cpt++;
     if (nb.value < saisie) {
         msg.innerHTML = "C'est + essaie encore";
     }
     if (nb.value == saisie) {
         msg.innerHTML = "YES tu as gagné";
         alert("Cool, tu as trouvé en " + cpt + " coup(s)");
     }
     if (nb.value > saisie) {
         msg.innerHTML = "C'est - essaie encore";
     }

 }

         bouton.onclick = tester;