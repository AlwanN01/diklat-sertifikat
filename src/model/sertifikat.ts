import db from 'config/mysql'
import { DataTypes } from 'sequelize'

const Sertifikat = db.define('sertifikat', {
  kdIHT: DataTypes.STRING(10),
  kdSertifikat: DataTypes.STRING(10),
  nip: DataTypes.STRING,
  nama: DataTypes.STRING
})
export default Sertifikat
