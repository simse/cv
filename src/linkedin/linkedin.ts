import { Client } from 'linkedin-private-api';



const getCvData = async () => {
    if (!process.env.LINKEDIN_USERNAME || !process.env.LINKEDIN_PASSWORD) {
        throw new Error('Missing LinkedIn username or password');
    }

    const client = new Client();
    await client.login.userPass({
        username: process.env.LINKEDIN_USERNAME,
        password: process.env.LINKEDIN_PASSWORD
    });

    const profile = await client.profile.getOwnProfile();

    console.log(profile);
    
}

export {
    getCvData
}