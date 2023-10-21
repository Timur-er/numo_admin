export const messageModel = [
    {
        type: 'select',
        name: 'receiver',
        placeholder: 'Who should receive newsletter?',
        options: ['segment1', 'segment2', 'segment3', 'segment4'],
        initial_values: [],
    },
    {
        type: 'select',
        name: 'black_list',
        placeholder: 'Who should not receive the newsletter?',
        options: ['segment1', 'segment2', 'segment3', 'segment4'],
        initial_values: [],
    },
    {
        type: 'input',
        name: 'message',
        placeholder: 'Whrite a message',
        initial_values: '',
    },
    {
        type: 'date',
        name: 'schedule_time',
        placeholder: 'Schedule time',
        options: ['3 years', '4 years', '5 years', '6 years'],
        initial_values: '',
    },
]