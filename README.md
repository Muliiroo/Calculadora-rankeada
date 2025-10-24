# 🧮 Calculadora de Partidas Rankeadas

Projeto desenvolvido durante o Bootcamp da [DIO](https://www.dio.me).

## 🎯 Objetivo
Criar uma função que calcula o saldo de vitórias e determina o nível do jogador com base em sua performance.

## ⚙️ Tecnologias
- JavaScript (Node.js)
- Git / GitHub

## 📘 Como usar
1. Clone este repositório
2. Execute o arquivo com o comando:
   ```bash
   node index.js
   ```

## 🧠 Lógica
O saldo é calculado por:
```
vitórias - derrotas
```

Os níveis são:
- Menos de 10 → **Ferro**
- 11 a 20 → **Bronze**
- 21 a 50 → **Prata**
- 51 a 80 → **Ouro**
- 81 a 90 → **Diamante**
- 91 a 100 → **Lendário**
- 101 ou mais → **Imortal**
