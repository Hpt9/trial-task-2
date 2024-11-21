export default function ChecklistNavigation() {
    const nav_titles = ['Homework & Case stuudy Tracker', 'Weekly Grading', 'Total Grading of DSA Bootcamp', 'Midterm Exam Results', 'Final Exam Results', 'Capstone Project Result']
    return (
        <div className='flex gap-x-[30px]'>
            {
                nav_titles.map((e:string) => (
                    <div className='pb-0.5 hover:text-[rgba(138,65,148,1)] hover:cursor-pointer hover:border-b hover:border-b-[rgba(138,65,148,1)] transition-all duration-150'>
                        {e}
                    </div>
                ))
            }
        </div>
    )
}
