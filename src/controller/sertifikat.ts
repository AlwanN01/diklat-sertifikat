import Sertifikat from 'model/sertifikat'

export const getAll: RH = async (req, res) => {
  try {
    const data = await Sertifikat.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

export const getSearch: RH = async (req, res) => {
  const data = await Sertifikat.findOne({
    where: {
      kdSertifikat: req.params.kdSertifikat
    }
  })
  res.render('findSertifikat', { isRegistered: data, message: data ? 'Sertifikat Terdaftar' : 'Sertifikat Tidak Terdaftar', data })
}
