let fila = [];

function adicionarUsuario(nome) {
  if (!nome || typeof nome !== 'string' || nome.trim() === '') {

    return;
  }
  fila.push(nome.trim());
}

function chamarProximo() {
  if (fila.length > 0) {
    return fila.shift(); 
  }
  return null; 
}

function obterFila() {
  return [...fila];
}

function obterPosicao(nome) {
  if (!nome) return -1;
  const index = fila.findIndex(usuario => usuario === nome);
  return index === -1 ? -1 : index + 1;
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