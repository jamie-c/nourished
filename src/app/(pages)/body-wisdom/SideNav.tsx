import SideNavCollapsibleMenu from "./SideNavCollapsibleMenu";

const SideNav = async () => {

    async function fetchSections(scope: string) {
        const results = await fetch(
            `${process.env.NEXTAUTH_URL}/body-wisdom/course-content/${scope}`
        );
        const json = await results.json();
        return json;
    }
    async function getBodyWisdomCourseSections() { return await fetchSections('all-sections') };
    async function getSections() { return await fetchSections('sections') };

    const sections = await getSections()
    const bodyWisdomCourseSections = await getBodyWisdomCourseSections()

    return (
        <SideNavCollapsibleMenu
            sections={sections}
            bodyWisdomCourseSections={bodyWisdomCourseSections}
        />
    )
}

export default SideNav
