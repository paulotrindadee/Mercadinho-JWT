// Criação da classe PRODUTO e suas atribuições através do método de construtor  onde foram criados os atributos da classe, NOME, PRECO e QUANTIDADE.

class Produto {
  constructor() {
    this.nome = ''
    this.preco = 0
    this.quantidade = 0
  }

  // Criação do método SETPRODUTO representando uma array contendo informações dos atributos da classe PRODUTO junto com o parâmetro DATA para cadastrar e alimentar os atributos da classe PRODUTO
  setProduto(data) {
    ;[this.nome, this.preco, this.quantidade] = data
  }

  // Método para exibir o produto atualmente cadastrado
  getProduto() {
    return ` Produto cadastrado! Produto: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`
  }
}

// Criação da classe Venda e suas atribuições através do método de construtor  onde foram criados os atributos da classe: Quantidade.

// A palavra-chave "super" é usada para acessar métodos da classe pai. Nesse caso a classe PRODUTO
class Venda extends Produto {
  constructor() {
    super()
    this.quantidadeVendida = 0
  }

  // Aqui informa Se o produto foi cadastrado, caso o produto for cadastrado e a quantidade for menor ou igual a 0 a entrada é inválida. e se quantidade for maior  ele
  setVenda(quantidade) {
    if (!this.nome) {
      console.log(
        'Produto não cadastrado. Cadastre o produto antes de registrar uma venda.'
      )
      return
    }

    if (quantidade <= 0) {
      console.log(
        'Quantidade de venda inválida. A quantidade deve ser maior que zero.'
      )
      return
    }

    if (quantidade > this.quantidade) {
      console.log('Estoque insuficiente para realizar a venda.')
      return
    }

    this.quantidadeVendida = quantidade

    this.quantidade -= quantidade

    this.exibirVenda()
  }

  exibirVenda() {
    const mensagem = `
      Última venda registrada:
      Produto: ${this.nome}
      Preço unitário: ${this.preco}
      Quantidade vendida: ${this.quantidadeVendida}
      
      Total da venda: ${this.calcularTotalVenda()}
      Estoque atual: ${this.quantidade}
    `

    console.log(mensagem)
  }

  calcularTotalVenda() {
    return this.preco * this.quantidadeVendida
  }
}

//Criando uma instancia de cadastro do produto e venda.

const produto01 = new Produto()
produto01.setProduto(['Arroz', 10.5, 100])
console.log(produto01.getProduto())

const venda = new Venda()
venda.setProduto(['Arroz', 10.5, 100])
venda.setVenda(20)
