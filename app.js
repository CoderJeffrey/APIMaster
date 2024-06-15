// This file is for tutorial on how to publish a post on LinkedIn using LinkedIn API
const axios = require('axios');

const userId = "YOUR_USER_ID";
const postContent = "This is my first LinkedIn Post via API (tutorial)";
const accessToken = "YOUR_ACCESS_TOKEN";

// Publish a Post
const publishPostAction = async (postContent, userId, accessToken) => {
    try {
        const response = await axios.post('https://api.linkedin.com/rest/posts', {
            "author": `urn:li:person:${userId}`,
            "commentary": `${postContent}`,
            "visibility": "PUBLIC",
            "lifecycleState": "PUBLISHED",
            "isReshareDisabledByAuthor": false,
            "distribution": {
                "feedDistribution": "MAIN_FEED",
                "targetEntities": [],
                "thirdPartyDistributionChannels": []
            },
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0',
                'LinkedIn-Version': '202403'
            }
        });

        return response;
    } catch (error) {
        console.error("error is:", error);
    }
};


const publishPost = async () => {
    try {
        const response = await publishPostAction(postContent, userId, accessToken);
        console.log("Post response status from Service is:", response.statusText);
    } catch (error) {
        console.error("error is:", error);
    }

    return null;
};

let result = publishPost();
