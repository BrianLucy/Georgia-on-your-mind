# Georgia-on-your-mind

## Description:

Georgia state park patrons need a central location where they can leave reviews about previous experiences and read reviews from other like-minded outdoor enthusiasts and state park rangers as they plan future trips

The app will require park patrons to create a username and password after which they will have access to a central location for leaving and reading reviews on Georgia’s state parks.

## Table of contents

- [ Link ](#links)
- [ Screenshot ](#screenshots)
- [ Installation ](#installation)
- [ Usage ](#usage)
- [ Contributions ](#contributions)
- [ Tests ](#tests)
- [ License ](#license)

## Screenshot

![parkify landing page](./images/parkifyss.png)

## Link

    [Click Here](https://parkify.herokuapp.com/) to go to the repo link.
  
## Installation

To install simply fork the repo, and clone down to your local machine. Then in the CLI at relative dir run 'npm i' to get all dependancies required for sucessfull run of the package. Download mySQL, then create db by using 'SOURCE db/schema.sql' in mySQL shell. Ensure that you have updated the /config/connection.js to use your mySQL with sequelize. Finally run 'npm run seed' to seed the db with default data.

## Usage

To use the package as a consumer, Simply visit the deployed link and create an account. After signing up, You can blog by clicking the create button above the posted blogs, on the home page. Comment by clicking an existing blog then on the view of the blog where you see the comments, below that you will have the option to make a comment, visit the dashboard to view your Blogs from there there will be two buttons that will give you the option to update or delete your blogs postings.

To use the package as a Developer, after following the installation steps above, at the root of the project directory run command ' npm start ' in your CLI, then click the link in the CLI to view site from localhost.

## Contributions

How to contribute?
fork the repo and clone down to your local machine. Once you have the latest version of the repo you can add or make changes then submit a pull request for your changes. Please use best practices as well as proper naming conventions and comments depicting what the code segements function is. Finally in the body of your pull request please explain why these changes you were necissary and if it is a bug what steps can be completed to reproduce this bug. If these guidelines are not met, pull requests will not be reviewed or accepted.## CREDITS
Many thanks to the members of the Alpha-Tiger-Squadron team: Valentina Arango, Will Kirby, Michael Lito, Brian Lucy, Somayyah Maqsudi, and Ben Smission.
Each stepped up in many ways to make contribtions that made this project a success.

## Tests

Endpoints were tested with Insomnia, If you should find any issues, see above on contibuting guidlines, or submit a issue with a detailed explanation on how to recreate the bug.

## License

MIT [![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

To see full details visit https://opensource.org/license/mit/

Preview...
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
