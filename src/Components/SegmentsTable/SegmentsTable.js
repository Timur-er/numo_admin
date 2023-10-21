import { useEffect, useState } from 'react'
import { Server } from '../../server/Server'
import CustomTable from '../CustomTable/CustomTable'
import { useNavigate } from "react-router";
import SegmentBtns from '../../SegmentBtns'

const SegmentsTable = () => {
  const [segments, setSegments] = useState([])

  const refetch = async () => {
    // TODO: error handling
    setSegments(await Server.segment.list())
  }

  useEffect(() => {
    refetch();
  });

  let isRemoving
  const onRemove = (segmentId) => {
    isRemoving = true
    setTimeout(() => {
      refetch()
      isRemoving = false
    });
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
          <SegmentBtns segmentId={id} onRemove={onRemove} />
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
    if (!isRemoving) navigate(`/segment/${id}`)
  }

  return (
    <CustomTable rows={rows} columns={columns} onRowClick={onRowClick} />
  )
}

export default SegmentsTable