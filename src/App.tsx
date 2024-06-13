import { MarkdownRenderer } from "./components/markdown";
import { useAuth } from "./lib/db";

function App() {
	const {user} = useAuth()
  return (
    <>
      <div className="flex justify-center">
        <MarkdownRenderer markdown="# Hello" />
				{user && user.name}
      </div>
    </>
  );
}

export default App;
