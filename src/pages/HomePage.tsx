
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="blue-page">
      <header className="header">
        <h1>Welcome</h1>
      </header>
      
      <main className="main-content">
        <div className="content-container">
          <p>This is a simple green webpage.</p>
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Green Page</p>
      </footer>
    </div>
  );
};

export default HomePage;