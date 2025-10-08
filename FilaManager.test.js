const { 
  adicionarUsuario, 
  chamarProximo, 
  obterFila, 
  obterPosicao,
  limparFila 
} = require('./FilaManager');

beforeEach(() => {
  limparFila();
});

describe('Gerenciamento da Fila Virtual', () => {

  it('deve adicionar um usuário à fila corretamente', () => {
    adicionarUsuario('Tiago');
    expect(obterFila()).toEqual(['Tiago']);
    expect(obterFila().length).toBe(1);
  });

  it('deve adicionar múltiplos usuários na ordem correta', () => {
    adicionarUsuario('Tiago');
    adicionarUsuario('Estevan');
    expect(obterFila()).toEqual(['Tiago', 'Estevan']);
  });

  it('deve chamar o próximo usuário (o primeiro da fila)', () => {
    adicionarUsuario('Tiago');
    adicionarUsuario('Estevan');
    
    const proximo = chamarProximo();
    
    expect(proximo).toBe('Tiago');
    expect(obterFila()).toEqual(['Estevan']);
  });

  it('deve retornar null ao tentar chamar o próximo de uma fila vazia', () => {
    expect(chamarProximo()).toBeNull();
  });

  it('deve retornar a posição correta de um usuário (base 1)', () => {
    adicionarUsuario('Tiago');
    adicionarUsuario('Estevan');
    adicionarUsuario('Wagner');
    
    expect(obterPosicao('Estevan')).toBe(2);
  });

  it('deve retornar -1 para um usuário que não está na fila', () => {
    adicionarUsuario('Tiago');
    expect(obterPosicao('Wagner')).toBe(-1);
  });

  it('não deve adicionar um usuário se o nome for vazio ou inválido', () => {
    adicionarUsuario('');
    adicionarUsuario('   '); // Espaços em branco
    adicionarUsuario(null);
    adicionarUsuario(undefined);
    expect(obterFila().length).toBe(0);
  });
});