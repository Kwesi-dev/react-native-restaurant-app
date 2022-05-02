import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer pyKhbrcf_jkqJ1Tr3C85B_hjVFn_vTS2lmGZ39UqAI2rzz_eQe9qsy7vHDq7sqeUAyuyV1OWGrTgJ1ibp93iOKk1sODb2iRtdVFfMXX4JtSojj7XX3yY0LZNT-dtYnYx",
    }
})