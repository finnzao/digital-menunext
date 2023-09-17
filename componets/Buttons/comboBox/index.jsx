
const comboBox = ({data}) => {

    const categoriesBox=data.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
        },[])

    return (
        <>
            {categoriesBox.map((item)=>

                     <option value={item}>{item}</option>
                    
                )}
        </>
    )
}

export default comboBox;