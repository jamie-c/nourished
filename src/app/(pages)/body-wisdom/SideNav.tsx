import SideNavCollapsibleMenu from "./SideNavCollapsibleMenu"

const SideNav = async () => {
    async function getBodyWisdomCourseSections() {
        const content = await fetch(
            `${process.env.NEXTAUTH_URL}/body-wisdom/course-content/all-sections`
        )
        const json = await content.json()
        return json
    }

    async function getSections() {
        const sections = await fetch(
            `${process.env.NEXTAUTH_URL}/body-wisdom/course-content/sections`
        )
        const json = await sections.json()
        return json
    }

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
