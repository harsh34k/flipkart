import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styleSubComponent/Categories.css"
import { Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

function Categories({ name, Category_name }) {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(false)

    const get_function = async () => {
        setisloading(true);

        try {
            const API = `https://flipkart-data.onrender.com/${name}`;
            const response = await axios.get(API);
            setdata(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setisloading(false);
        }
    }


    useEffect(() => {
        get_function();
    }, [])
    return (<>
        {isloading ? (
            <>
                <h2 className='categories_name'> {Category_name}</h2>
                <div className='catogries_main'>

                    {Array(10).fill().map((_, index) => (
                        <div className='individual_catogries' key={index}>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton width="60%" sx={{ margin: "10px 0" }} />
                        </div>
                    ))}
                </div>

            </>
        ) : (
            <>
                <h2 className='categories_name'> {Category_name}</h2>
                <div className='catogries_main'>
                    {data.map((item) => {
                        return <div className='individual_catogries'>
                            <img src={item.image || item.imageUrl[0]} className='img_catogries' alt="" srcSet="" />
                            <div className='title'>
                                <Typography>{item.description || item.Title}</Typography>
                            </div>

                        </div>
                    })
                    }
                </div>

            </>
        )}

    </>
    )
}

export default Categories