"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const fetchPDF = async (fileName: string) => {
    try {
        const response = await fetch(`/api/pdf/`, {
            method: "GET",
            headers: {
                "file-name": fileName,
            },
        })
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        console.log("🚀 ~ file: page.tsx:21 ~ fetchPDF ~ url:", url)

        const contentDisposition = response.headers.get("Content-Disposition")
        const originalFileName = contentDisposition
            ? contentDisposition.split("filename=")[1]
            : fileName

        const link = document.createElement("a")
        link.href = url
        link.download = originalFileName
        link.click()
    } catch (error) {
        console.error("Error fetching PDF:", error)
    }
}

function Page({ params }: { params: { fileName: string } }) {
    const router = useRouter()
    console.log("🚀 ~ file: page.tsx:34 ~ Page ~ router:", router)
    const { fileName } = params
    console.log("🚀 ~ file: page.tsx:24 ~ Page ~ fileName:", fileName)

    useEffect(() => {
        if (!fileName) return
        fetchPDF(fileName)
        setTimeout(() => {
            router.back()
        }, 1000)
    }, [fileName])

    return null
}

export default Page
