import { useCallback } from "react";

const useExportToDoc = (htmlContent, elementId = 'doccontent', fileName) => {
    const exportToDoc = useCallback(() => {
        let content
        if (htmlContent) {
            content = htmlContent
        } else if (elementId) {
            content = document.getElementById(elementId).innerHTML
        } else {
            console.error('Either htmlContent or elementId must be provided.')
            return
        }

        const styles = Array.from(document.styleSheets)
            .map(styleSheet => {
                try {
                    return Array.from(styleSheet.cssRules)
                        .map(rule => rule.cssText)
                        .join('')
                } catch (e) {
                    console.log(e)
                    return ''
                }
            })
            .join('')

        const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.ord/TR/REC-html40'>
    <head>
    <style>${styles}</style>
    </head>
    <body>`
        const postHtml = `</body></html>`
        const fullContent = preHtml + content + postHtml
        const blob = new Blob(['\ufeff', fullContent], {
            type: 'application/msword;charset=utf-8'
        })

        const url = URL.createObjectURL(blob)
        const downloadLink = document.createElement('a')
        document.body.appendChild(downloadLink)
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName)
        } else {
            downloadLink.href = url
            downloadLink.download = fileName
            downloadLink.click()
        }

        document.body.removeChild(downloadLink)
    }, [htmlContent, elementId, fileName])

    return exportToDoc
}

export default useExportToDoc