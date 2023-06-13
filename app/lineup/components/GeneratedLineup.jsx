export default async function GeneratedLineup({ promise }) {
    const response = await promise;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: response }} />
        </>
    )
}
