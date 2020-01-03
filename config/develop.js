module.exports = {
  'wwwBaseUrl': 'http://localhost:3000',
  'enviroment': 'dev',
  'db': {
    'password'        : 'root'
  },
  'radis': {
    'host': 'localhost',
    'port': '6379',
    'ttl': 7200,
    'logErrors': false
  },
  'sequeliszeOptions': {
    'logging': console.log
  }
};