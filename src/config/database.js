require('pg');
require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  use_env_variable: 'DATABASE_URL',

  define: {
    timestamps: true,
    underscored: true,
  },

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};