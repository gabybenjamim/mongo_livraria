import app from './src/app.js'

const PORT = 3000;




app.listen(PORT, () =>{
    console.log(`Servidor escutando na porta ${PORT}!` )
});


// o nodemon serve para atualizar automaticamente as coisas antes de subir no naveador. Ele carrega as informações. Renicia as aplicações sem que a gente precise ficar atualizando
