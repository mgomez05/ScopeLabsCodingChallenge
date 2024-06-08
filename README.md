## Overview

This my submission for the Scope Labs Coding Assessment, which tasks the user with creating an educational website for viewing videos. Specifically, I was tasked with making a website with the following capabilities:

- Show a list of videos and allow users to select a video from the list
- Allow the user to create a new video object with:
  - title
  - description
  - video URL
- Provide functionality for viewing and adding comments to videos
  - Allow user to comment on a video
  - Let users view comments from other users
- Open the videos in full screen with full playback functionality.
  - I assumed "fully playback functionality does not include the following:
    - Closed Captions
    - Quality Selection: Change the resolution or quality of the video stream.
- Include options for adjusting playback speed and volume.

The project includes 2 pages:

- Home Page
  - Clicking on any of the videos in the gallery brings you to 'Single Video Page' for that video
  - Clicking on the Upload button in the top right corner shows an Upload Video Form at the bottom of the screen
- Single Video Page

  - Shows a main video on the left, and a vertical video list on the right
    - Clicking on any of the videos in the video list brings you to 'Single Video Page'
      for that video
  - Allows users to view comments and make comments on the main video
  - Clicking on the Home button in the top right corner brings you back to the Home Page

  Here are some pictures of the website, with dummy data used for the video list and video gallery being shown

  ![Home Page Screenshot](.\screenshots\ScopeLabsCodingChallenge_HomePage.PNG)
  ![Single Video Page Screenshot](.\screenshots\ScopeLabsCodingChallenge_SingleVideoPage.PNG)

## Project Tech Stack

- This is a [Next.js](https://nextjs.org/) and React web application, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
  - NOTE: While Next.js allows developers to additionally make backend endpoints, I did not create any API endpoints for the purposes of this Coding Challenge, although I did model some of the data to be retrieved from the server using types in TypeScript. The `hello.ts` api endpoint came with the app when I created the app using `create-next-app`.
- This project uses TailwindCSS for styling throughout the app
- This project uses TypeScript to provide typing throughout the React components, particularly for component props and dummy data retrieved from the server

## Getting Started

To run the app locally, follow the following steps:

1. Clone the repo to your local machine

2. Navigate to the project folder and run `npm install` to install the project dependencies

3. Once dependencies have been installed, run `npm run dev` to run the app

4. Once the app finishes compiling, ppen [http://localhost:3000](http://localhost:3000) with your browser to see the result
