module.exports = {
  dialect: 'postgress',
  host: 'localhost',
  username: 'postgress',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // tabela user_groups intead of userGroups
    underscoredAll: true, // colluns user_groups intead of userGroups
  },
};
