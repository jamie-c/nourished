import SideNav from "../SideNav";

function Page() {
	return (
		<div className="min-h-screen w-full flex flex-col items-center">
			<div className="flex flex-col items-center max-w-7xl w-full sm:w-7xl pl-4 pt-16">
				<SideNav />
			</div>
		</div>
	);
}

export default Page;
