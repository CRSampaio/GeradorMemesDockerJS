import memeMaker from '@erickwendel/meme-maker'

const options = {
  image: './img/meme.jpg',         // Required
  outfile: './img/new-meme.jpg',  // Required
  topText: 'TESTE',            // Required
  bottomText: 'PRA UMA "ALINHADINHA"',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));