const axios = require('axios');

const tgNotify = parseInt(process.env['TELEGRAM_NOTIFY']);

function sendMessage(token, chatId, text) {
  if(token && chatId && tgNotify) {
    axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log('ERROR [sendMessage]', error);
    });
  }
}

module.exports = {
  sendMessage
}