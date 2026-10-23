// Encabezado de sección reutilizable (título + bajada opcional).
function SectionHeading({ id, title, children, as: Tag = "h2", align = "start" }) {
    return (
        <div className={`section-heading section-heading-${align}`}>
            <Tag id={id}>{title}</Tag>
            {children && <p>{children}</p>}
        </div>
    );
}

export default SectionHeading;
