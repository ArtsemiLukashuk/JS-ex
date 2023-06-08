import renderTable from "./render-table.js";

const data = [
    {
        firstName: 'John',
        lastName: 'Doe',
        class: 11,
        grades: [
            { subject: 'Math', grade: 5 },
            { subject: 'Chemistry', grade: 4 },
            { subject: 'Literature', grade: 3 },
        ],
    },

    {
        firstName: 'James',
        lastName: 'Bond',
        class: 6,
        grades: [
            { subject: 'Math', grade: 2 },
            { subject: 'Chemistry', grade: 5 },
            { subject: 'Literature', grade: 4 },
        ],
    },

    {
        firstName: 'Mary',
        lastName: 'Sew',
        class: 9,
        grades: [
            { subject: 'Math', grade: 5 },
            { subject: 'Chemistry', grade: 5 },
            { subject: 'Literature', grade: 5 },
        ],
    },
];


renderTable(data);