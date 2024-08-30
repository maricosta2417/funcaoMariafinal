const nomes = ["Maria", "Renata", "Acides", "Vitor", "Marcelo", "Amanda", "Gustavo", "Sara"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}
export const nome = aleatorio(nomes);