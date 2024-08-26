# Puzzlo 2.0

## Overview

Puzzlo 2.0 is the enhanced version of the original Puzzlo, a game that started as a simple idea by two friends just 21 days before their dissertation deadline. Initially known as "Project 21," the game challenges players to guess the password of the day. Scoring is based on how early in the day the password is guessed, the number of attempts taken, and the time spent guessing. Puzzlo 2.0 builds on this core concept with advanced technologies, improved performance, and an upgraded user experience.

## Key Features

### 1. **UTC-Based Gameplay**

- **Consistent Timing:** The entire game operates on Coordinated Universal Time (UTC), ensuring a consistent experience for players worldwide. This eliminates discrepancies caused by time zone differences, creating a level playing field for all participants.
- **Daily Reset:** The password of the day is generated at the start of the UTC day, providing a new challenge every 24 hours.

### 2. **Secure Password Transmission**

- **Asymmetric Encryption:** At the start of each UTC day, the password is generated and encrypted using asymmetric key encryption. This secure method ensures that the password remains confidential during transmission to the client.
- **Decryption Upon Validation:** The encrypted password is only decrypted on the client side during a validation check, enhancing security and preventing unauthorized access.
- **Benefits:** This approach ensures that the password is never exposed during transmission, protecting the integrity of the game. It also provides a robust mechanism for preventing cheating, as the password can only be accessed when all conditions are met.

## Features & Changelog

### 1. **Migration to TypeScript**

- **Why TypeScript?** The migration from JavaScript to TypeScript introduces type safety, catching errors during development rather than at runtime, resulting in a more reliable and maintainable codebase.
- **Benefits:** Enhanced tooling support, reduced runtime errors, and improved code maintainability.

### 2. **Enhanced Notification System**

- **UI Upgrade:** The notification system has been revamped with a new user interface, offering a more engaging and visually integrated experience.
- **Improved User Engagement:** Timely and relevant notifications help keep players informed and enhance their interaction with the game.

### 3. **Leaderboard Overhaul**

- **New Data Table:** A redesigned leaderboard features a more advanced table structure, allowing for real-time sorting, filtering, and an intuitive display of player rankings.
- **Real-Time Updates:** Rankings are updated dynamically, providing players with immediate feedback on their performance.

### 4. **Accordion for "How to Play"**

- **Simplified Navigation:** The "How to Play" section now uses an accordion interface, replacing the previous card-based system. This design simplifies navigation and improves access to information.
- **Better User Experience:** The accordion layout offers a cleaner, more organized presentation of instructions, making it easier for players to find what they need.

### 5. **Cookie-Based Analytics System**

- **User Activity Tracking:** The new cookie-based system captures user activity in a non-intrusive manner, providing valuable analytics data for enhancing gameplay and user engagement.
- **Privacy-Friendly:** All data collection complies with privacy best practices, ensuring that user data is handled securely and responsibly.

### 6. **Redesigned User Interface**

- **Modern Look & Feel:** The entire UI has been redesigned with a focus on modern design principles, creating a more visually appealing and user-friendly experience.
- **Improved Functionality:** Enhanced UI elements also come with improved functionality, making navigation and interaction more intuitive.

### 7. **Optimized Server Interactions**

- **Reduced Server Calls:** The number of server calls has been reduced by 50%, from 8 to 4. This optimization lowers latency, improves game performance, and enhances the overall user experience.
- **Client-Side Caching:** Data is cached on the client side, leading to faster load times and a smoother user experience.

### 8. **TRPC Over REST for API Calls**

- **Why TRPC?** Switching from REST to TRPC streamlines API calls, making the game faster and more efficient.
- **Faster Performance:** TRPC reduces the overhead associated with traditional RESTful APIs, resulting in quicker data retrieval and a more responsive game.

### 9. **Static Data Types for Client and Server**

- **Consistency & Reliability:** Declaring static data types for both client and server ensures data consistency across the application, reducing the likelihood of errors.
- **Error Reduction:** This approach minimizes the risk of data mismatches, improving the game's reliability.

## Contributors

- **Ajay Mahadeven**
- **Furkan Tekinay**

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE.md](LICENSE.md) file for details.
