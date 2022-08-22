import db from 'config/mysql'
import mysql2 from 'mysql2/promise'
import { ValidationError } from 'sequelize'
import colors from 'colors'
;(async () => {
  try {
    const connection = await mysql2.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD
    })
    await connection.query('CREATE DATABASE IF NOT EXISTS `' + process.env.NAME + '`')
    await db.authenticate()
    console.log('Connection has been established successfully.')
    //sync table
    await (await import('model/sync/sertifikatSY')).default()
  } catch (err) {
    if (err instanceof ValidationError) console.log(colors.red(err.errors[0].message))
    else console.error('Unable to connect to the database:', err.message)
  }
})()
