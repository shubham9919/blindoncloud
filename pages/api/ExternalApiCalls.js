export default class ExternalApiCalls {
    constructor(){
    }

    async BlogPostsSection(TokenParams){
        // console.log("External BlogPostsSection API Call Start")
        const res = await fetch('https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=Home-Page-Content')
        const json = await res.json()
        // console.log("External BlogPostsSection API Call END")
        return json
    }

    async PromotionsPostsSection(TokenParams){
        // console.log("External PromotionsPostsSection API Call Start")
        const res = await fetch('https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=promotionsData')
        const json = await res.json()
        // console.log("External PromotionsPostsSection API Call END")
        return json
    }

    async BlogContent(topicParams){
        // console.log("External BlogContent API Call START")
        let BlogsPromiseArray = []
        const res = await fetch(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=BlogsList`)
        const json = await res.json()
        for(let i=0;i<json.BlogsList.length; i++){
            BlogsPromiseArray[i] = `https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=${json.BlogsList[i]}`
        }
        let AllBlogs = await Promise.all(BlogsPromiseArray.map( async(req) => {
            let arrayRes =  await fetch(req)
            return await arrayRes.json()
        }))

        // console.log("External BlogContent API Call END")
        return AllBlogs
    }

    async BlogList(topicParams){
        // console.log("External BlogList API Call START")
        const res = await fetch(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=BlogsList`)
        const json = await res.json()
        // console.log("External BlogList API Call END")
        return json
    }
    
    async getBlogData(params) {
        // console.log("External getBlogData API Call END")
        const res = await fetch(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=${params.article}`)
        const json = await res.json()
        // console.log("External getBlogData API Call END")
        return json
    }
}
