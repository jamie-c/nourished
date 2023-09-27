"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
    bodyWisdomCourseSections,
    titleToUrl,
} from "./course-content/courseSections"

const sections = bodyWisdomCourseSections.map((section) => {
    return section.title
})

const SideNav = () => {
    const pathname = usePathname()
    const subMenuShownClassName = "max-h-96 min-h-fit"
    const subMenuHiddenClassName = "max-h-0 min-h-0"
    const [isExpanded, setIsExpanded] = useState([...sections].map(() => false))
    const [subMenuClassName, setSubMenuClassName] = useState(
        [...sections].map(() => subMenuHiddenClassName)
    )

    useEffect(() => {
        if (!pathname) return
        const sectionIndex = bodyWisdomCourseSections.findIndex(
            (section) => titleToUrl(section.title) === pathname
        )
        if (sectionIndex === -1) return
        setIsExpanded((prev) => {
            const newState = [...prev]
            newState[sectionIndex] = true
            return newState
        })
        setSubMenuClassName((prev) => {
            const newState = [...prev]
            newState[sectionIndex] = subMenuShownClassName
            return newState
        })
    }, [pathname])

    const toggleSubMenu = (index: number) => {
        setIsExpanded((prev) => {
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState
        })
        setSubMenuClassName((prev) => {
            const newState = [...prev]
            newState[index] = isExpanded[index]
                ? subMenuHiddenClassName
                : subMenuShownClassName
            return newState
        })
    }

    return (
        <div className="w-md">
            <div
                className="
                    w-full
                    max-w-md
                    rounded-md
                    shadow-lg
                    shadow-slate-300
                    divide-y
                    divide-solid
                    divide-nblg-500
                "
            >
                {sections.map((section, index) => (
                    <div
                        key={`section-${index}`}
                        className={`${
                            isExpanded[index]
                                ? "divide-y divide-solid divide-nbrg-500 "
                                : ""
                        }
                        w-full
                        border-b-1
                        border-nblg-500
                        pt-3
                        pb-2
                        text-xl
                        text-nblg-500
                        font-semibold
                        uppercase
                        cursor-pointer`}
                        onClick={() => toggleSubMenu(index)}
                    >
                        <span className="px-4">{section}</span>
                        {bodyWisdomCourseSections[index].sections.map(
                            (subSection, subIndex, subArray) => {
                                if (subArray.length === 1) return null
                                const sectionUrl = titleToUrl(section)
                                const subSectionUrl = titleToUrl(
                                    subSection.title
                                )
                                const url = `/body-wisdom/course-content/${sectionUrl}/${subSectionUrl}`
                                return (
                                    <div
                                        key={`sub-section-${subIndex}`}
                                        className={
                                            `${
                                                isExpanded[index]
                                                    ? subMenuShownClassName
                                                    : subMenuHiddenClassName
                                            }` +
                                            " flex flex-col overflow-hidden transition-all duration-500 list-none"
                                        }
                                    >
                                        <Link href={url} className="group">
                                            <div
                                                className="
                                            group
                                            text-ndag-500
                                            font-light
                                            normal-case
                                            flex
                                            flex-row
                                            items-center
                                            justify-start
                                            gap-2
                                            pt-2
                                            px-4
                                        "
                                            >
                                                <span
                                                    className="
                                                text-white
                                                bg-npag-500
                                                group-hover:bg-nblg-500
                                                rounded-full
                                                p-1
                                                pt-2
                                                w-6
                                                h-6
                                                min-w-6
                                                max-w-6
                                                min-h-6
                                                max-h-6
                                                inline-flex
                                                items-center
                                                justify-center
                                                mb-1
                                            "
                                                >
                                                    {subIndex + 1}
                                                </span>
                                                {subSection.title}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav
