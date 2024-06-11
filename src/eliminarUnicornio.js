import axios from "axios";
function eliminarUnicornio( url, id ) { 
       return axios.delete(`${url}/${id}`)
            .then(res => {
            }).catch(err => { console.log(err); })
    }
export default eliminarUnicornio