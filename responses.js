module.exports = {
  vim: function (client, channel) {
    return client
      .say(
        channel,
        `NVIM + NERDTree + COC + Dracula Theme, vou subir o arquivo de configuracao no GIT. LINK => https://github.com/guilherme-smarquees/MyVimConfig`
      )
      .catch((err) => console.log(err));
  },
  shell: function (client, channel) {
    return client
      .say(channel, ' ZSH, dracula theme !')
      .catch((err) => console.log(err));
  },
};
