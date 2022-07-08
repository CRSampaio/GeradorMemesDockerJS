# Gerador de Memes usando NodeJS, Docker e GraphicsMagick

Projeto criado na live: [Criando um gerador de memes com Docker e JavaScript](https://youtu.be/MOpwfg1GJig). Irei anotar aqui o passo-a-passo que fiz para copiar esse projeto

## 1º Passo: Inicializar um projeto NodeJS

- **npm** é o gerenciador de pacotes do NodeJS. Como se fosse o NuGet do .NET.

- Utilizei o comando **npm init** para inicializar o projeto, ele irá criar o arquivo package.json.

- Nesse arquivo, iremos definir algumas propriedades que iremos usar em nosso projeto.

- Após isso, iremos usar o pacote criado pelo Erick, em **npm install @erickwendel/meme-maker**.

- Utilizamos também um pacote chamado **nodemon**, que irá fazer a função de live-reload do nosso projeto.

- Live-reload, é basicamente o nosso programa ser executado assim que nós fizermos qualquer alteração e salvar, sem que nós termos que ficar executando outro run.

## 2º Passo: Codificando nosso gerador de meme

- No arquivo **index.js**, nós estamos importando a biblioteca que o Erick desenvolveu para utiliza-la.

- Após isso, estamos declarando uma constante chamada **options** que irá pegar a imagem do nosso meme e adicionar o texto que desejamos a ela.

- Por ultímo, estamos invocando a função **memeMaker**, passando como parâmetro para ela a constante **options**, após a função ser executada no callback dela estamos passando outra função por lambda para ser executada, que irá retornar uma mensagem no console dizendo se deu certo ou não.

## 3º Passo: Criando nosso imagem Docker e subindo nosso container

- Pelo o que eu percebi, o Docker não é nada mais que uma VM que roda na máquina, isolada de qualquer coisa do nosso S.O. Isso é excelente, pois caso precisemos subir um ambiente de desenvolvimento, podemos fazer isso através de uma imagem Docker.

- O arquivo **Dockerfile** irá contar a nossa receita do que será instalado/executado no nosso container Docker.

- Não entendi muito bem o que o arquivo **docker-compose.yml** faz.

- Quando você for instalar o Docker na máquina, certifique-se de fechar o Docker quando terminar de utiliza-lo, deixar o serviço Windows dele em modo manual e também não deixar ele subindo junto com a máquina.

- Com o serviço do Docker e aplicação dele rodando, basta rodar o comando **docker-compose --build** e o container subira sem problemas.
