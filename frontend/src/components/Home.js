import { Box, Typography } from '@mui/material'
import "../styles/Home.css"
import React from 'react'
import Beauty from "../assets/Beauty.webp"
import Electronic from "../assets/Electronic.webp"
import Fashion from "../assets/Fashion.webp"
import Flights from "../assets/Flights.webp"
import Furniture from "../assets/Furniture.webp"
import Grocery from "../assets/Grocery.webp"
import Homes from "../assets/Home&Kitchen.webp"
import Mobiles from "../assets/Mobiles.webp"
import Tv from "../assets/Tv.webp"
import Bank from "../assets/Bank.jpg"
import MyCarousel from "../components/subComponents/Crousel"
import Categories from './subComponents/Categories'



function Home() {
    const arr = [Beauty, Electronic, Fashion, Flights, Furniture, Grocery, Homes, Mobiles, Tv];

    // const res = axios.get(API)

    function create_div_for_categories(item) {
        const categoryName = item.split('/').pop().split('.')[0];
        return <div className={item} style={{ margin: "0 1rem" }}>
            <img src={item} alt="" srcset="" />
            <Typography>
                {categoryName}
            </Typography>
        </div>
    }
    return (
        // categories

        <>
            <Box className="home" sx={{ backgroundColor: "#F1F3F5", minHeight: "92vh" }}>
                <Box className="center_box" sx={{ maxWidth: "82%", margin: "auto", padding: "5px 0px" }}>
                    <div className="catergories classic_white_back" >
                        {arr.map(create_div_for_categories)}
                    </div>
                    {/* Crousel */}
                    <MyCarousel />

                    {/* Bank */}
                    <div className="classic_white_back Bank">
                        <img src={Bank} className='Bank_img' alt="" srcset="" />
                    </div>

                    {/* Boards */}

                    <Categories name={"top_offers "} Category_name={"Top Offers"} />
                    <Categories name={"disforyou"} Category_name={"Specially For You"} />
                    <Categories name={"bestselling"} Category_name={"Best Sellers"} />
                    <Categories name={"mens "} Category_name={"Top in Mens"} />
                    <Categories name={"electronics "} Category_name={"Best in Electronics"} />
                    <Categories name={"mobile "} Category_name={"Best in Mobiles"} />
                </Box>
            </Box>
        </>


    )
}

export default Home