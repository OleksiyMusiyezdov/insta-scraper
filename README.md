You need to have Node.js installed (https://nodejs.org/en/download/).

Unpack the archive files and run "npm install" to install all necessary dependencies.

Scraper needs you to sign in to instagram.
To do that you have to set your credentials in .env file
(see: .env.example).

To run the scraper please write "npm start *username*" where *username* is username of instagram user you are looking for.

If this user exists you will have information in a JSON format:

{
username: string;
followersCount: number;
is_account_public: boolean;
}
