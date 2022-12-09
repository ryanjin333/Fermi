import fermi from "../../fermi"

export default [
    {
        title: "Easy",
        subtitle: "10 multiple choice questions",
        startColor: '#F3B968',
        endColor: '#EA8D8D',
        length: 10,
    },
    {
        title: "Casual",
        subtitle: "10 questions",
        startColor: '#3FA494',
        endColor: '#CCA5F6',
        length: 10,
    },
    {
        title: "Advanced",
        subtitle: `Attempt all ${Object.keys(fermi.questions).length} questions`,
        startColor: '#614385',
        endColor: '#516395',
        length: Object.keys(fermi.questions).length,
    },
]