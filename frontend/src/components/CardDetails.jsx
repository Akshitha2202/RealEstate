import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

function CardDetails() {
    const { id } = useParams();

    const properties = [
        { 
            id: 1, 
            description: 'This upscale mansion offers modern elegance with an open floor plan, expansive pool, and high-end amenities. Perfect for families or those who love to entertain, it sits in a peaceful neighborhood providing both comfort and style.',
            image: 'https://media.istockphoto.com/id/1150545984/photo/upscale-modern-mansion-with-pool.jpg?s=612x612&w=0&k=20&c=JT7qSGgmlGfiNiqJE2jw6rYwRcYCj9KBs7i2Rmyyypo=', 
            email: 'abc@gmail.com', 
            phone: '+1234567890',
            price: '$150000'
        },
        { 
            id: 2, 
            description: 'Nestled in a quiet area, this cozy home offers a spacious backyard, modern kitchen, and is close to the city center. Ideal for a small family or couples, it provides a serene living environment away from city noise.',
            image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg', 
            email: 'def@gmail.com', 
            phone: '+1234567891',
            price: '$1200'
        },
        { 
            id: 3, 
            description: 'This elegant two-story home features a spacious garden and sophisticated architecture. Ideal for nature lovers, the property offers ample space for gatherings, making it a perfect family retreat.',
            image: 'https://ssl.cdn-redfin.com/photo/rent/2635c504-de9a-4fb6-9d41-2210aa708910/islphoto/genIsl.0_2.webp', 
            email: 'ghi@gmail.com', 
            phone: '+1234567892',
            price: '$1000'
        },
        { 
            id: 4, 
            description: 'This traditional home is updated with modern interiors and a large, inviting living space. Located in a family-friendly area, it offers a warm and welcoming atmosphere perfect for settling down.',
            image: 'https://cdn.pixabay.com/photo/2017/02/24/18/19/new-home-2095832_640.jpg', 
            email: 'jkl@gmail.com', 
            phone: '+1234567893',
            price: '$120000'
        },
        { 
            id: 5, 
            description: 'A stylish contemporary home with an open-concept layout, located in a lively neighborhood. Enjoy modern decor, top-of-the-line appliances, and a vibrant community atmosphere.',
            image: 'https://photos.zillowstatic.com/fp/4b2e59624a5d6213c9def2d8b42fb503-p_e.jpg', 
            email: 'mno@gmail.com', 
            phone: '+1234567894',
            price: '$800'
        },
        { 
            id: 6, 
            description: 'This serene property is surrounded by lush greenery and natural light, providing a peaceful retreat. Perfect for those seeking privacy, it has spacious rooms and a relaxing ambiance.',
            image: 'https://photos.zillowstatic.com/fp/47112a9b9aa73c6eadb8af5b536cf219-p_e.jpg', 
            email: 'pqr@gmail.com', 
            phone: '+1234567895',
            price: '$1100'
        }
    ];

    const property = properties.find(p => p.id === parseInt(id));

    return (  
        <div>
            <Navbar />
            
            <div className="relative w-full min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?ga=GA1.1.737561315.1725476793&semt=ais_hybrid')" }}>
                
                <div className="absolute top-0 left-[200px] text-center mt-4">
                    {/* Back button positioned 200px from the left */}
                    <Link to="/course">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>

                <div className="container mx-auto p-8 text-black mt-24">
                    <h1 className="text-3xl font-bold text-center mb-8">Property Details</h1>

                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left Side: Property Description */}
                        <div className="w-full md:w-1/2 text-center md:text-left p-4">
                            <h2 className="text-xl font-semibold mb-4">Property Description</h2>
                            <p className="text-lg mb-4">{property ? property.description : 'Property not found'}</p>
                            <p className="text-lg mb-4 text-blue-600">Contact Through </p>
                            <p className="text-lg mb-4"><strong>Email:</strong> {property ? property.email : 'N/A'}</p>
                            <p className="text-lg"><strong>Phone:</strong> {property ? property.phone : 'N/A'}</p>
                        </div>

                        {/* Right Side: Card Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img 
                                src={property ? property.image : 'https://via.placeholder.com/400x300.png'} 
                                alt={`Card Image ${id}`} 
                                className="rounded-lg shadow-xl max-w-full" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
