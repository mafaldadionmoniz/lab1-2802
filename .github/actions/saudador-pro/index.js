// Aceder aos inputs definidos no action.yml
const nome = process.env.INPUT_NOME_UTILIZADOR;
const sinal = process.env.INPUT_ENTUSIASMO;

console.log(`Olá, ${nome}${sinal}`);
console.log("Ação JavaScript executada com sucesso!");
