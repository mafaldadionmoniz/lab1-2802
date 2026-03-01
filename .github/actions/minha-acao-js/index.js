// Aceder ao input definido no action.yml (mapeado como INPUT_NOME_DO_INPUT)
const quem = process.env.INPUT_QUEM;

console.log(`Olá, ${quem}! Esta mensagem vem da minha ação JavaScript personalizada.`);

// Exemplo de como definir um output para ser usado em passos seguintes
console.log(`::set-output name=resultado::Olá ${quem}`);
