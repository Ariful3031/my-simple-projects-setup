import React from 'react'
import { useParams } from 'react-router'

const UpdateCategory = () => {
    const id = useParams();
    const categoryId = id?.id;
    return (
        <div>UpdateCategory {categoryId}</div>
    )
}

export default UpdateCategory