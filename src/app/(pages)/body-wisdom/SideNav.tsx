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
    const [active, setActive] = useState(
        [...bodyWisdomCourseSections].map((section) =>
            [...section.sections].map(() => false)
        )
    )

    useEffect(() => {
        if (!pathname) return
        const sectionIndex = bodyWisdomCourseSections.findIndex((section) =>
            pathname.includes(titleToUrl(section.title))
        )
        const subSectionIndex = bodyWisdomCourseSections[
            sectionIndex
        ].sections.findIndex((subSection) =>
            pathname.includes(titleToUrl(subSection.title))
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
        setActive((prev) => {
            const newState = [...prev]
            newState[sectionIndex] = [...prev[sectionIndex]].map(
                (subSection, index) => {
                    return index === subSectionIndex
                }
            )
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
                        }`}
                    >
                        <div
                            className="
                                w-full
                                border-b-1
                                border-nblg-500
                                pt-3
                                pb-2
                                text-xl
                                text-nblg-500
                                font-semibold
                                uppercase
                                cursor-pointer"
                            onClick={() => toggleSubMenu(index)}
                        >
                            <span className="px-4">{section}</span>
                        </div>
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
                                            " flex flex-col overflow-hidden transition-all duration-500"
                                        }
                                    >
                                        <Link href={url} className="group">
                                            <div
                                                className="
                                                    group
                                                    relative
                                                    text-ndag-500
                                                    font-light
                                                    normal-case
                                                    flex
                                                    flex-row
                                                    items-center
                                                    justify-start
                                                    gap-2
                                                    pt-2
                                                    pb-1
                                                    px-4
                                                "
                                            >
                                                <span
                                                    className={`${
                                                        active[index][subIndex]
                                                            ? "block "
                                                            : "hidden "
                                                    } 
                                                        group-hover:block
                                                        absolute
                                                        top-0
                                                        left-0
                                                        w-1
                                                        h-full
                                                        bg-nblg-500
                                                    `}
                                                />
                                                <span
                                                    className={`${
                                                        active[index][subIndex]
                                                            ? "bg-nblg-500 "
                                                            : "bg-npag-500 "
                                                    }
                                                        text-white
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
                                                    `}
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
