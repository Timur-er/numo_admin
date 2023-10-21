import { Server } from './server/Server'

export default function SegmentBtns({ segmentId, onRemove }) {
  const _onRemove = () => {
    onRemove?.()
    Server.segment.remove(segmentId)
  }

  return (
    <div className="flex gap-2">
      <button className="btn-primary">Download</button>
      <button className="btn-primary" onClick={_onRemove}>Remove</button>
    </div>
  )
}