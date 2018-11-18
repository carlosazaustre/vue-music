import vueMusicService from './vue-music'

const trackService = {
  search (q) {
    const type = 'track'

    return vueMusicService.get('/search', {
      params: { q, type }
    })
      .then(res => res.data)
  }
}

export default trackService
