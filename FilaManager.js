// FilaManager.js
let fila = [];

function adicionarUsuario(nome) {
  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    // Não adiciona nomes vazios ou inválidos
    return;
  }
  fila.push(nome.trim());
}

function chamarProximo() {
  if (fila.length > 0) {
    return fila.shift(); // Remove e retorna o primeiro elemento
  }
  return null; // Retorna nulo se a fila estiver vazia
}

function obterFila() {
  return [...fila]; // Retorna uma cópia para evitar modificação externa
}

function obterPosicao(nome) {
  if (!nome) return -1;
  const index = fila.findIndex(usuario => usuario === nome);
  return index === -1 ? -1 : index + 1; // Retorna -1 se não encontrar, senão a posição (base 1)
}

function limparFila() {
    fila = [];
}

module.exports = { 
  adicionarUsuario, 
  chamarProximo, 
  obterFila, 
  obterPosicao,
  limparFila 
};