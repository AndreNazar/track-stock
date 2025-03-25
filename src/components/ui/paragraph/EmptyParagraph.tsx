import "./empty-paragraph.scss"

function EmptyParagraph ({title}: {title?: string}) {
    return <p className="empty-paragraph">{title}</p>
}

export default EmptyParagraph