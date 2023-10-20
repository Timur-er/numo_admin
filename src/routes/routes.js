import {ANALYTICS, MESSAGES, SEGMENTS} from "./const";
import SegmentsPage from "../Pages/SegmentsPage/SegmentsPage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import AnalyticsPage from "../Pages/AnalyticsPage/AnalyticsPage";

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

]