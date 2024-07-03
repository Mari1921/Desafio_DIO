let timeheroi = ["Time dos Otakus"];
var vitorias = 10000;
var rankeadas = 324579;
if (rankeadas < 10) {
  console.log("O " + timeheroi + "Está no ranking de Ferro!");
} else if (rankeadas > 11 || rankeadas < 20) {
  console.log("O " + timeheroi + "Está no ranking de Bronze!");
} else if (rankeadas > 21 || rankeadas < 50) {
  console.log("O " + timeheroi + "Está no ranking de Prata!");
} else if (rankeadas > 51 && rankeadas < 80) {
  console.log("O " + timeheroi + "Está no ranking de Ouro!");
} else if (rankeadas > 81 && rankeadas < 90) {
  console.log("O " + timeheroi + "Está no ranking Diamante!");
} else if (rankeadas > 91 && rankeadas < 100) {
  console.log("O " + timeheroi + "Está no ranking Lendário!");
} else if (rankeadas >= 101) {
  console.log("O " + timeheroi + "Está no ranking Imortal!");
}
 function mostrarNivel(Nivel) {
     console.log("O time dos Otaku está no nível " + Nivel + ".");
 }
 mostrarNivel(100);
 
 while (rankeadas > 0) {
   rankeadas -= vitorias;
   console.log("Não desistam agora, continuem treinando!");
   break;
 }
