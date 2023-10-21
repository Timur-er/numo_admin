import { useEffect, useState } from 'react'
import { Server } from '../../server/Server'
import CustomTable from '../CustomTable/CustomTable'
import { useNavigate } from "react-router";

const SegmentsTable = () => {
  const [segments, setSegments] = useState([])

  const refetch = async () => {
    // TODO: error handling
    setSegments(await Server.segment.list())
    console.log(segments)
  }

  useEffect(() => {
    refetch();
  });

  const onRemove = (segmentId) => {
    Server.segment.remove(segmentId)
    refetch()
  }

  const columns = [
    {field: 'name', headerName: 'Name', width: 400},
    {field: 'total_users', headerName: 'Number of users', width: 300},
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row: { id }}) => {
        return (
          <div class="flex gap-2">
            <button class="btn-primary">Download</button>
            <button class="btn-primary" onClick={() => onRemove(id)} >Remove</button>
          </div>
        )
      }
    }
  ];

  const rows = segments.map((segment) => ({
    ...segment,
    total_users: `${segment.total_users} k`
  }))

  const navigate = useNavigate();
  const onRowClick = ({ row: { id }}) => {
    navigate(`/segment/${id}`)
  }

  return (
    <CustomTable rows={rows} columns={columns} onRowClick={onRowClick} />
  )
}

export default SegmentsTable