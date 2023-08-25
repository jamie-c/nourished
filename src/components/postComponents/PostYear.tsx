import dayjs from "dayjs"

const PostYear = ({ date, id }: { date: string, id: string }) => {
    const year = dayjs(date).year()

    return (
        <div id={id} className="text-[#8A51AE] text-4xl font-medium pb-6">
            {year}
        </div>
    )
}

export default PostYear