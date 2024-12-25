
export default async function Map() {
    const respons = await fetch('http://localhost:5075')
    const listItems = respons.map((respons) =>
        <li>{respons.name}</li>,
        <li>{respons.id}</li>,
        <li>{respons.isGluten}</li>
    )
    return listItems;
}