function get(msg) {
  const cmds = {
    "!invite": 'https://discord.gg/kYBtYPj',
    "!azurePipelines": 'https://azure.microsoft.com/pt-br/services/devops/pipelines/',
    "!youtube": 'https://youtube.com/collabcode',
  };

  return cmds[msg];
}

export default {
  get
}