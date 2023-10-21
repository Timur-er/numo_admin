import React, { useEffect, useState } from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import { useParams } from 'react-router'
import { Server } from '../../server/Server'
import SegmentBtns from '../../SegmentBtns'
import SegmentStats from '../../Components/stats/SegmentStats/SegmentStats'

const SegmentDetailsPage = () => {
  const id = +(useParams()).id;
  
  const [segment, setSegment] = useState(null)

  const refetch = async () => {
    // TODO: error handling
    setSegment(await Server.segment.byId(id))
  }

  useEffect(() => {
    refetch();
  });
  
  return (
    <PageContainer>
      <header className="page-header flex justify-between mb-7">
        <h1>
          {segment?.name}
        </h1>
        <SegmentBtns segmentId={id}/>
      </header>
      <SegmentStats />
    </PageContainer>
  );
};

export default SegmentDetailsPage;