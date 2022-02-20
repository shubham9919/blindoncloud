export default class Token {

    constructor() {
        console.log("Token Generation Start")
    }

    async TokenGeneration() {
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        urlencoded.append("scope", "<scope>");

        // const res = await fetch('https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=Home-Page-Content')
        const res = await fetch('<token url>', {
            headers: {
                Authorization: "Basic <token>",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded,
            method: "POST",
            redirect: 'follow'

        })
        const json = await res.json()
        console.log("Token Generation End")
        return json
    }
}