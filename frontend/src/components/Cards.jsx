import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/card/${item.id}`); // Navigates to the CardDetails page for this specific item
    };

    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 border-black border dark:bg-slate-900 dark:text-white dark:border-black">
                <figure>
                    <img src={item.image} alt={item.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <button className="btn btn-primary" onClick={handleViewClick}>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
