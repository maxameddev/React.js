// Header
const Header = () => {
  return <h1>MOHAMED MOHAMUD</h1>;
};

// Blog post
const BlogPost = () => {
  return (
    <div>
      <h1>How Claude AI can help you with your writing</h1>
      <p>
        Artificial Intelligence (AI) writing skills have transformed the way people create content...
        {/* (text-kaaga waa OK, waan gaabiyay halkan) */}
      </p>
    </div>
  );
};

// Footer
const Footer = () => {
  return <footer>© 2024 Mohamed's Website. All rights reserved.</footer>;
};

// Layout / Main component
const App = () => {
  return (
    <div>
      <Header />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default App;