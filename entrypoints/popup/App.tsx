import cacheLogo from '/cache.svg';
import './App.css';
import "tailwindcss";
function App() {
  const handleClearCache = () => {
    browser.storage.local.clear();
    browser.notifications.create({
      type: "basic",
      iconUrl: cacheLogo,
      title: "Cache Cleared",
      message: "Cache Cleared Successfully",
    });
  }

  return (
    <>
      <div>
      <img src={cacheLogo} className="logo react" alt="Clear Cache Logo" />
      </div>
      <h1>Clear Cache</h1>
      <div className="card">
        <button onClick={() => handleClearCache()} className="button">
          Clear Cache
        </button>
      </div>
      <p className="read-the-docs">
        Click on button to clear cache.
      </p>
    </>
  );
}

export default App;
