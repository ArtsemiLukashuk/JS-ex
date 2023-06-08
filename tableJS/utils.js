export function getAverageGrade(grades) {
    const totalGrades = grades.reduce((total, current) => {
        return total += current.grade;
    }, 0);

    return totalGrades / grades.length

}