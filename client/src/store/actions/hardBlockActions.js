import axios from "axios";
import config from '../../components/config/config'

export const viewHardBlock = () => {
    const apiURL = config.API_URL;
    return (dispatch) => {
        axios.get(`${apiURL}/blocks/hardblockview`).then((hardblock) => {
            dispatch({
                type: "VIEW_HARD_BLOCK",
                hardblock
            })
        }).catch(error => {
            console.log(error.response)
        })
    }
}

// export const viewDefaultProject = () => {
//     const apiURL = config.API_URL;
//     return(dispatch) => {
//         axios.get(`${apiURL}/blocks/getproject`).then((project) => {
//             dispatch({
//                 type:"VIEW_PROJECT",
//                 project
//             })
//         })
//     }
// }