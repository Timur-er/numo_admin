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
    {field: 'name', headerName: 'Segment name', width: 300},
    {field: 'total_users', headerName: 'Users (k)', width: 300},
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: ({ row: { id }}) => {
        return (
          <div>
            <button>download</button>
            <button onClick={() => onRemove(id)} >remove</button>
          </div>
        )
      }
    }
  ];

  const rows = segments

  const navigate = useNavigate();
  const onRowClick = ({ row: { id }}) => {
    navigate(`/segment/${id}`)
  }

  return (
    <CustomTable rows={rows} columns={columns} onRowClick={onRowClick} />
  )
}

export default SegmentsTable