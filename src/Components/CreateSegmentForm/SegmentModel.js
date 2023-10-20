export const segmentModel = [
    {
        type: 'string',
        name: 'platform',
        placeholder: 'Platform',
        options: ['Telegram', 'Viber']
    },
    {
        type: 'string',
        name: 'children_age',
        placeholder: 'Children age',
        options: ['3 years', '4 years', '5 years', '6 years']

    },
    {
        type: 'string',
        name: 'territories',
        placeholder: 'Territories',
        options: []
    },
    {
        type: 'string',
        name: 'register_time',
        placeholder: 'Time of registration',
        options: [
            'Less then 6 month',
            '6 - 12 month',
            '12 - 18 month',
            'more than 18 month',
        ]
    },
    {
        type: 'string',
        name: 'tips_number',
        placeholder: 'Number of tips',
        options: [
            'Once a day',
            'Once a week',
        ]
    },
    {
        type: 'string',
        name: 'child_number',
        placeholder: 'Number of children',
        options: [
            '1 child',
            '2 children',
            '3 children',
            '4 or more',
            ]
    },
    {
        type: 'string',
        name: 'customer_satisfaction',
        placeholder: 'Customer satisfaction',
        options: ['Loyal users', 'Dissatisfied users']
    },
    {
        type: 'string',
        name: 'activity_period',
        placeholder: 'Activity period',
        options: ['7 days', '14 days', '21 days', 'Month', 'Quarter', 'Rarely']
    },
]