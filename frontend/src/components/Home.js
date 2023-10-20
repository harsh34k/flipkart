import { Box, Typography } from '@mui/material'
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
import MyCarousel from "../components/subComponents/Crousel"



function Home() {
    return (
        // categories
        <>
            <Box className="home" sx={{ backgroundColor: "#F1F3F5", minHeight: "92vh" }}>
                <Box className="center_box" sx={{ maxWidth: "82%", margin: "auto", padding: "5px 0px" }}>
                    <div className="catergories main-ref" style={{ backgroundColor: "white", margin: "10px", display: "flex", justifyContent: "space-evenly", alignItems: "center", minHeight: "12vh", overflow: "scroll", }}>
                        <div className="Beauty">
                            <img src={Beauty} alt="" />
                            <Typography>
                                Beauty & Personal Care
                            </Typography>
                        </div>
                        <div className="Electronic" style={{ margin: "0 1rem" }}>
                            <img src={Electronic} alt="" />
                            <Typography>
                                Electronic
                            </Typography>
                        </div>
                        <div className="Fashion" style={{ margin: "0 1rem" }}>
                            <img src={Fashion} alt="" />
                            <Typography>
                                Fashion
                            </Typography>
                        </div>
                        <div className="Flights" style={{ margin: "0 1rem" }}>
                            <img src={Flights} alt="" />
                            <Typography>
                                Flights
                            </Typography>
                        </div>
                        <div className="Furniture" style={{ margin: "0 1rem" }}>
                            <img src={Furniture} alt="" />
                            <Typography>
                                Furniture
                            </Typography>
                        </div>
                        <div className="Grocery" style={{ margin: "0 1rem" }}>
                            <img src={Grocery} alt="" />
                            <Typography>
                                Grocery
                            </Typography>
                        </div>
                        <div className="Homes" style={{ margin: "0 1rem" }}>
                            <img src={Homes} alt="" />
                            <Typography>
                                Homes
                            </Typography>
                        </div>
                        <div className="Mobiles" style={{ margin: "0 1rem" }}>
                            <img src={Mobiles} alt="" />
                            <Typography>
                                Mobiles
                            </Typography>
                        </div>
                        <div className="Tv" style={{ margin: "0 1rem" }}>
                            <img src={Tv} alt="" />
                            <Typography>
                                Tv
                            </Typography>
                        </div>
                    </div>
                    {/* Crousel */}
                    <MyCarousel />
                </Box>
            </Box>
        </>


    )
}

export default Home