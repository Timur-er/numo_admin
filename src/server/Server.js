const SEGMENTS_KEY = 'segments'

const parsedSegments = JSON.parse(localStorage.getItem(SEGMENTS_KEY) || '[]')
let segments = Array.isArray(parsedSegments) ? parsedSegments : []
let nextId = segments.length

const saveSegments = () => {
  localStorage.setItem(SEGMENTS_KEY, JSON.stringify(segments))
}

export const Server = {
  segment: {
    async create(segment) {
      const id = nextId
      const totalUsers = Math.round(Math.random() * 100) / 10
      const newSegment = {
        id, total_users: totalUsers, ...segment
      }
      console.log('Create segment:', newSegment)
      segments =[...segments, newSegment]
      nextId += 1
      saveSegments()
    },

    async list() {
      return segments
    },

    async remove(segmentId) {
      segments = segments.filter(i => i.id !== segmentId)
      saveSegments()
    }
  }
}