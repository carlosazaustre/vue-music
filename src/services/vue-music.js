import trae from 'trae'
import configService from './config'

const vueMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default vueMusicService
