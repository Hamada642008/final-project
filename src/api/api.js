import axios from "axios";

const url = 'https://back-final-project-production-a0ad.up.railway.app'

export const get_data = async ()=>{
    const res = await axios.get(`${url}/products/`);
    return res.data
}

export const get_data_id = async (id)=>{
    const res = await axios.get(`${url}/products/${id}`);
    return res.data
}

export const signup = async (email,password)=>{
    try{
        const res = await axios.post(`${url}/user/signup`,{email,password})
        if (res.data.message) {
            console.log(res.data.message);
            alert('User created! Check your email to confirm.');
        }
        return res.data
    }catch(err){
        if (err.response) {
        console.error(err.response.data);
        alert(err.response.data.error || 'Signup failed');
        } else {
        console.error(err);
        alert('Signup failed');
        }
    }
}




export const login = async (email, password) => {
    try {
        const res = await axios.post(`${url}/user/login`, { email, password });
        localStorage.setItem("token", res.data.access_token);
        
        return res.data; 
    } catch (err) {
        if (err.response) {
        console.error(err.response.data);
        alert(err.response.data.error || 'Login failed');
        } else {
        console.error(err);
        alert('Login failed');
        }
    }
};

export const add_to_cart = async (product_id, quantity = 1) => {
    const token = localStorage.getItem('token');
    
    try {
        const res = await axios.post(`${url}/cart/add`,{ product_id, quantity },{
            headers: {
            Authorization: `Bearer ${token}` 
            }
        }
        );
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const get_cart = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${url}/cart/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
};


export const remove_from_cart = async (product_id) => {
    const token = localStorage.getItem('token')

    if (!token) throw new Error("No session found");

    try {
        const res = await axios.delete(`${url}/cart/remove/${product_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};