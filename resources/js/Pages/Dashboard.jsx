import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react'; // Pastikan Inertia diimpor dari @inertiajs/react
import { Inertia } from '@inertiajs/inertia-react';

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            title, description, category
        };
        console.log('Data to submit:', data); // Debugging untuk memeriksa data yang akan dikirim
        Inertia.post('/news', data);
    };
    
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Input Berita</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <input 
                            type="text" 
                            placeholder="Judul" 
                            className="m-2 input input-bordered input-accent w-full bg-slate-100 text-gray-800" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Deskripsi" 
                            className="m-2 input input-bordered input-accent w-full bg-slate-100 text-gray-800" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Kategori" 
                            className="m-2 input input-bordered input-accent w-full bg-slate-100 text-gray-800" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                        />
                        <button 
                            className="btn btn-active btn-accent m-2" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
