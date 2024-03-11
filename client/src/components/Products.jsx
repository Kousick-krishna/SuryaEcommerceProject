import React, { useEffect, useState } from 'react';

export const Products = ({ handleAddToCart, searchInput }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setFilteredData(json);
            });
    }, []);

    useEffect(() => {
        if (!searchInput) {
            setFilteredData(data);
            return;
        }

        const filtered = data.filter(product =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchInput, data]);

    return (
        <div className="grid grid-cols-4 gap-10 ml-10">
            {filteredData.map(product => (
                <div key={product.id} className='shadow-lg rounded-lg p-4 w-72 h-80 bg-gray-200 bg-opacity-50'>
                    <h3 className='ml-20 font-semibold'>{product.name}</h3>
                    <div>
                        <img src={product.picture} alt={product.name} className="w-50 h-50 shadow-lg rounded-md mt-2 transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className='mt-3 font-light text-gray-700'>
                        {product.description}
                    </div>
                    <span className='inline-flex w-16 h-12 text-black mt-2 items-center justify-center font-bold ml-3'>
                        &#8377;{product.price}
                    </span>
                    <button onClick={() => handleAddToCart(product)} className='w-16 h-12 bg-white text-black rounded-lg shadow-md ml-28 hover:bg-blue-500 hover:text-white'>
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};





