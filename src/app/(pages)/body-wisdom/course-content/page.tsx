import SideNav from "../SideNav"

function Page() {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center">
            <div className="flex flex-col items-center max-w-7xl w-screen sm:w-7xl pl-4 pt-16">
                <SideNav />
            </div>
        </div>
    )
}

export default Page
