import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Chats = () => {
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/api/users/all', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUsers(response.data.users);
            } catch (error) {
                setError('An error occurred. Try again later.', error);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    };
    if (error) {
        return <div>{error}</div>;
    };


  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-10 max-w-96 mx-auto p-2'>
            <p className='lg:text-4xl md:text-3xl sm:text-xl '>Chats</p> 
            <p className='my-4'>Here are the list of users</p>
            <div className='flex flex-col gap-2 w-full'>
            {users.map(user => (
                <div key={user._id} className='border border-gray-400 p-2 rounded-lg'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                </div>
            ))}
            </div>
            </div>
    </div>
  )
}

export default Chats