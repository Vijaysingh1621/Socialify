

---

# Socialify

Socialify is an innovative social media web application designed to provide a seamless and engaging user experience. With Socialify, users can easily share their life moments by posting photos, connecting with friends through friend requests, and interacting with content by liking and commenting on posts. The platform also includes features to ensure a safe and respectful community, such as the ability to block users, preventing unwanted interactions.

Built using cutting-edge technologies like Next.js 15 and React 19, Socialify leverages the power of TypeScript to enhance code quality and maintainability. The backend is powered by Prisma, an advanced ORM, and MongoDB, a flexible NoSQL database, ensuring efficient data management and scalability. Authentication is handled by Clerk, providing secure and user-friendly sign-up and login processes, with support for webhooks to synchronize user data updates.

Additionally, Socialify uses Cloudinary for reliable image storage, allowing users to upload and manage their photos effortlessly. Zod is employed for robust data validation, ensuring the integrity and consistency of user inputs. Overall, Socialify aims to create a dynamic and interactive online environment, encouraging meaningful connections and positive interactions among its users.

## Features

- **Post Photos**: Users can upload and share photos with their friends.
- **Friend Requests**: Send and accept friend requests to connect with others.
- **Likes and Comments**: Like and comment on posts to engage with friends.
- **Block Users**: Block other users to prevent them from interacting with you.

## Technology Stack

- **Frontend**: 
  - [Next.js 15](https://nextjs.org/)
  - [React 19](https://reactjs.org/)
  - TypeScript for static type checking and better development experience.

- **Backend**:
  - [Prisma](https://www.prisma.io/) as the ORM for database management.
  - [MongoDB](https://www.mongodb.com/) as the database.
  - [Clerk](https://clerk.dev/) for authentication, including webhooks for synchronizing user creation and updates with the database.
  - [Zod](https://zod.dev/) for schema validation and data validation.
  - [Cloudinary](https://cloudinary.com/) for storing and managing images.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) instance
- [Cloudinary Account](https://cloudinary.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/socialify.git
   cd socialify
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Setup environment variables**:

   Create a `.env.local` file in the root directory and add your environment variables. For example:

   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
   CLERK_API_KEY=<Your Clerk API Key>
   DATABASE_URL=<Your MongoDB URL>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   ```

4. **Run migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**:

   ```bash
   yarn dev
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

Once the app is running, you can:

- **Sign Up/Login**: Create an account or log in using Clerk authentication.
- **Profile Setup**: Set up your profile, including profile picture and bio.
- **Post Photos**: Upload and share your favorite moments, stored securely in Cloudinary.
- **Interact with Friends**: Send friend requests, like, and comment on posts.
- **Manage Privacy**: Block users to manage your interactions.

## Development

To contribute to Socialify, please follow the steps below:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. **Commit your changes**:

   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature-name
   ```

5. **Create a pull request**.

## Contributing

We welcome contributions from the community. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for providing the tools and libraries that made this project possible.
- Special thanks to [Clerk](https://clerk.dev/) for seamless authentication integration.
- Thanks to [Cloudinary](https://cloudinary.com/) for reliable and efficient image storage solutions.

---
