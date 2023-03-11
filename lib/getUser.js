const BASE_URL = "http://localhost:3000"

const getProd = async () => {
    const response = await fetch(`${BASE_URL}/api/products`);
    const json = await response.json();

    return json
}
export default getProd;