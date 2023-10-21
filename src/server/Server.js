const SEGMENTS_KEY = 'segments'

const parsedSegments = JSON.parse(localStorage.getItem(SEGMENTS_KEY) || '[]')
let segments = Array.isArray(parsedSegments) ? parsedSegments : []

const saveSegments = () => {
  localStorage.setItem(SEGMENTS_KEY, JSON.stringify(segments))
}

const getRandom = (beforeComma = 1, afterComma = 0) => Math.round(
  Math.random() * (10**(beforeComma + afterComma))
) / (10**afterComma)

// TODO: handle errors
export const Server = {
  segment: {
    async list() {
      return segments
    },

    async create(segment) {
      const id = getRandom(5) /* Mock id */
      const totalUsers = getRandom(1, 1) /* Mock total users */
      const newSegment = {
        id, total_users: totalUsers, ...segment
      }
      console.log('Create segment:', newSegment)
      segments =[...segments, newSegment]
      saveSegments()
    },

    async remove(segmentId) {
      console.log('remove', segmentId)
      segments = segments.filter(i => i.id !== segmentId)
      saveSegments()
    },

    async byId(segmentId) {
      return segments.find(i => i.id === segmentId)
    },
  },

  analytics: {
    async totalUsers() {
      // TODO
    },

    async activity() {
      // TODO
    }
  }
}