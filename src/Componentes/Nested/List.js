export default function List({data}) {
    
    function listData() {
        return (
            <ul>
                {data.map((item) => <li>{item}</li>)}
            </ul>
        )
    }

    return (
        <div>
            <h3>Lista</h3>
            {listData()}
        </div>
    )
}