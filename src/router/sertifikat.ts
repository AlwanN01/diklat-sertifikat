import express from 'express'
import * as Sertifikat from 'controller/sertifikat'

const router = express.Router()
router.get('/', (req, res) => {
  res.render('home')
})
router.get('/sertifikat', (req, res) => {
  res.render('searchSertifikat')
})
router.get('/sertifikat/:kdSertifikat', Sertifikat.getSearch)
export default router
