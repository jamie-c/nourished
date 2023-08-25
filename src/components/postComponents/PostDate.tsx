import dayjs from "dayjs"

const PostDate = ({ date }: { date: string}) => {

    const monthName = dayjs(date).format('MMM')
    const dayNum = dayjs(date).format('DD')

    return (
        <div className="text-xl font-medium">
            {`${monthName} ${dayNum}`}
        </div>
    )
}

export default PostDate