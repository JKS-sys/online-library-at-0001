# 📚 Online Library System

A modern, responsive online library system built with React, Vite, and Redux Toolkit. Browse books, search by title or author, filter by categories, and add new books to the collection.

## 🚀 Features

- **📖 Home Page** - Welcome message with book categories and popular books
- **🔍 Browse Books** - Filter by category and search functionality
- **📚 Book Details** - Detailed view of individual books
- **➕ Add Book** - Form to add new books with validation
- **🎨 Beautiful UI** - Modern design with gradients and animations
- **📱 Responsive** - Works perfectly on all device sizes
- **⚡ Fast Performance** - Built with Vite for optimal speed

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: Pure CSS with CSS Custom Properties
- **Icons**: SVG and Emoji icons

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JKS-sys/online-library-at-0001.git
   cd online-library-at-0001
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🏗️ Project Structure

```
online-library-at-0001/
├── public/
├── src/
│   ├── components/
│   │   └── Header.jsx          # Navigation header
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── BrowseBooks.jsx     # Book listing with filters
│   │   ├── BookDetails.jsx     # Single book view
│   │   ├── AddBook.jsx         # Add new book form
│   │   └── NotFound.jsx        # 404 error page
│   ├── store/
│   │   ├── store.js            # Redux store configuration
│   │   └── booksSlice.js       # Books state management
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Application entry point
│   └── styles.css              # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Pages Overview

### 🏠 Home Page (`/`)

- Welcome hero section with call-to-action
- Book category grid with emoji icons
- Popular books showcase
- Responsive grid layout

### 📚 Browse Books (`/browse`)

- Complete book listing
- Category filtering (`/books/:category`)
- Search by title or author
- Book cards with ratings and categories

### 🔍 Book Details (`/book/:id`)

- Detailed book information
- Author, description, and rating display
- Back navigation
- Clean, focused layout

### ➕ Add Book (`/add-book`)

- Form with comprehensive validation
- Category selection
- Rating input (0-5)
- Redux state integration

### ❌ 404 Page

- Handles invalid routes
- Shows attempted URL
- Link back to home page

## 🔧 Key Features

### State Management

- **Redux Toolkit** for centralized state
- **Books slice** with addBook functionality
- **Persistent state** across navigation

### Routing

- **React Router DOM** for navigation
- **Dynamic routes** for categories and book details
- **404 handling** for invalid paths

### Form Handling

- **Controlled components** for form inputs
- **Real-time validation** with error messages
- **Form submission** with Redux dispatch

### Search & Filter

- **Real-time search** across titles and authors
- **Category filtering** with URL parameters
- **Combined filters** for precise results

## 🎨 Styling System

### CSS Architecture

- **CSS Custom Properties** for consistent theming
- **Utility classes** for common patterns
- **Component-specific styles** for complex layouts
- **Responsive design** with mobile-first approach

### Design Features

- **Gradient backgrounds** and modern color palette
- **Smooth animations** and hover effects
- **Card-based layout** with shadows and borders
- **Typography hierarchy** for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔄 Redux State Structure

```javascript
{
  books: {
    books: [
      {
        id: number,
        title: string,
        author: string,
        description: string,
        category: string,
        rating: number
      }
    ]
  }
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the optimized production build ready for deployment.

### Deployment Platforms

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Jagadeesh Kumar S** - _Initial work_ - [JKS-sys](https://github.com/JKS-sys/)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Redux team for state management solution
- Emoji contributors for the beautiful icons

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/JKS-sys/online-library-at-0001/issues) page
2. Create a new issue with detailed description
3. Provide steps to reproduce if it's a bug

---

**Happy Reading!** 📖✨

---

_Last updated: November 2025_
