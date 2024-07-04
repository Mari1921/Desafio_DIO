let timeheroi = ["Time dos Otakus"];
var vitorias = 20;
var rankeadas = 10;
let saldoVitorias = vitorias - rankeadas
function mostrarNivel(Nivel) {
    if (rankeadas < 10) {
  console.log("O " + timeheroi + "Está com" + saldoVitorias + " e está no nivel de Ferro!");
} else if (rankeadas > 11 || rankeadas < 20) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de  Bronze!");
} else if (rankeadas > 21 || rankeadas < 50) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de Prata!");
} else if (rankeadas > 51 && rankeadas < 80) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de Ouro!");
} else if (rankeadas > 81 && rankeadas < 90) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de Diamante!");
} else if (rankeadas > 91 && rankeadas < 100) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de Lendário!");
} else if (rankeadas >= 101) {
  console.log("O " + timeheroi + "Está com " + saldoVitorias + " e está no nivel de Imortal!");
}
  }
 mostrarNivel();
 
 while (rankeadas > 0) {
   rankeadas -= vitorias;
   console.log("Não desistam agora, continuem treinando!");
   break;
 }
 
