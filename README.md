# Oficina1_Grupo5_TesteUnidade# Projeto: Sistema de Fila Virtual - Testes de Unidade

**Disciplina:** Oficina de Integração 1 
**Grupo:** Tiago Navarro Bettanin e Estevan Garrido Hernandes Sastre

---

## Descrição

Este pacote contém a implementação do módulo de lógica de gerenciamento da fila (`FilaManager.js`) para o projeto de um Sistema de Fila Virtual e seus respectivos testes de unidade (`FilaManager.test.js`) utilizando Jest. 

O objetivo é validar o "coração" do sistema de forma isolada, garantindo seu correto funcionamento antes da integração com o servidor e a interface do cliente.

## Arquivos Inclusos

- **`FilaManager.js`**: O módulo com a lógica pura da fila (adicionar, remover, consultar).
- **`FilaManager.test.js`**: O conjunto de testes para o `FilaManager.js`.
- **`package.json`**: Arquivo de configuração do projeto Node.js, contendo as dependências e scripts.
- **`README.md`**: Este arquivo de instruções.

## Como Executar os Testes

Para executar os testes, siga os passos abaixo no terminal:

**1. Pré-requisitos:**
   - Ter o **Node.js** instalado em seu computador.

**2. Instalar as Dependências:**
   Navegue até a pasta do projeto pelo terminal e execute o comando para instalar o Jest (a única dependência de desenvolvimento):
   ```bash
   npm install
   ```

**3. Rodar os Testes:**
   Após a instalação, execute o seguinte comando para rodar todos os testes definidos:
   ```bash
   npm test
   ```

## Resultado Esperado

O terminal deverá exibir uma saída indicando que todos os 7 testes passaram com sucesso, similar a esta:

```
PASS  ./FilaManager.test.js
 ✓ deve adicionar um usuário à fila corretamente (2ms)
 ✓ deve adicionar múltiplos usuários na ordem correta
 ✓ deve chamar o próximo usuário (o primeiro da fila) (1ms)
 ✓ deve retornar null ao tentar chamar o próximo de uma fila vazia
 ✓ deve retornar a posição correta de um usuário (base 1)
 ✓ deve retornar -1 para um usuário que não está na fila
 ✓ não deve adicionar um usuário se o nome for vazio ou inválido (1ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        ...s
```