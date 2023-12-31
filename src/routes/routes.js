import {ANALYTICS, CREATE_SEGMENT, MESSAGES, SEGMENT, SEGMENTS} from "./const";
import SegmentsPage from "../Pages/SegmentsPage/SegmentsPage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import AnalyticsPage from "../Pages/AnalyticsPage/AnalyticsPage";
import CreateSegmentPage from "../Pages/CreateSegmentPage/CreateSegmentPage";
import SegmentDetailsPage from "../Pages/SegmentDetailsPage/SegmentDetailsPage";

export const routes = [
    {
        icon: '',
        name: 'Segments',
        path: SEGMENTS,
        element: <SegmentsPage />,
    },
    {
        icon: '',
        name: 'Messages',
        path: MESSAGES,
        element: <MessagesPage />,
    },
    {
        icon: '',
        name: 'Analytics',
        path: ANALYTICS,
        element: <AnalyticsPage />,
    },
    {
        icon: '',
        name: 'Create segment',
        path: CREATE_SEGMENT,
        element: <CreateSegmentPage />,
    },
    {
        icon: '',
        name: 'Segment details',
        path: SEGMENT,
        element: <SegmentDetailsPage />,
    },
]