# Random GIF Generator 🎬

A modern Next.js application for discovering and searching random GIFs powered by the GIPHY API.  Built with React 19 and styled with Tailwind CSS.

![Random GIF Generator](./Gemini_Generated_Image_xt0556xt0556xt05.png)

## ✨ Features

- **Random GIF Generator**: Get a random GIF with a single click
- **GIF Search**: Search for specific GIFs using keywords
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- **Modern UI**: Clean and intuitive interface with a custom navigation bar
- **Fast Performance**: Powered by Next.js 16 with optimized rendering

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16. 0.1 (Pages Router)
- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## 📁 Project Structure

```
rendom-gif-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component
│   │   └── Spinner.js         # Loading spinner component
│   ├── hooks/                 # Custom React hooks
│   ├── pages/
│   │   ├── api/               # API routes
│   │   ├── _app.js            # App wrapper
│   │   ├── _document.js       # Document configuration
│   │   ├── index.js           # Home page
│   │   ├── Random. js          # Random GIF page
│   │   └── Search.js          # Search GIF page
│   └── styles/                # Global styles
├── public/                    # Static assets
├── next.config.mjs            # Next.js configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
└── package.json
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghost-28-02/rendom-gif-frontend.git
   cd rendom-gif-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your GIPHY API key:
   ```env
   NEXT_PUBLIC_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application. 

## 📝 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server

## 🎯 Usage

### Random GIF
Navigate to the Random page to generate random GIFs.  Click the button to get a new random GIF each time.

### Search GIF
Use the Search page to find specific GIFs by entering keywords.  The app will fetch relevant GIFs based on your search query.

## 🌐 API Integration

This project integrates with the [GIPHY API](https://developers.giphy.com/) to fetch GIF data. Make sure to: 
1. Create a free account at [GIPHY Developers](https://developers.giphy.com/)
2. Generate an API key
3. Add it to your `.env.local` file

## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the design by: 
- Modifying the `tailwind.config.mjs` file
- Editing component styles in the respective files
- Updating global styles in the `src/styles` directory

## 📦 Dependencies

- **axios**: HTTP client for API requests
- **next**:  React framework with server-side rendering
- **react**:  UI library
- **react-dom**: React DOM rendering
- **react-router-dom**:  Client-side routing
- **tailwindcss**:  Utility-first CSS framework

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page. 

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GIPHY API Documentation](https://developers.giphy.com/docs/api)

---

Made with ❤️ by [ghost-28-02](https://github.com/ghost-28-02)
```
