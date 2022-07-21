const Developer = ({name, age, country}) => {
    return (
        <div className="card" >
            <h3>Dev: {name}</h3>
            <p>Idade: {age}</p>
            <p>País: {country}</p>
        </div>
    )
}

export default Developer