

const Filter = ({onFilter}) => {
    return (
        <>
        <label>Find contacts by name
            <input type="text" onChange={e=>onFilter(e.currentTarget.value)}/>
        </label>
        </>
    )
    
}

export default Filter;