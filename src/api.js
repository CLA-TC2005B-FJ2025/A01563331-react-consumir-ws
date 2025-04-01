import axios from "axios";

const getUsuario = async (user_id) => {

    const response = await axios.get('https://urban-space-guacamole-69959wg5rgrjf5g5v-2025.app.github.dev/test/' + user_id, {
    });
    
    console.log(response)
    return response;
};
  
export default getUsuario;