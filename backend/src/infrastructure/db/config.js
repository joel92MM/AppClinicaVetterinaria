const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

module.exports = {
  // Cambiamos sql(text, params) por sql.query(text, params)
  query: async (text, params) => {
    try {
      const rows = await sql.query(text, params);
      return { rows }; 
    } catch (error) {
      console.error('❌ Error en ejecución de Query HTTP:', error.message);
      throw error;
    }
  }
};