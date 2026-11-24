
import Counter from "./components/Counter";
import GoAbout from "./components/GoAbout";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My App!</h1>

      <Counter start={10} />
      <GoAbout/>
    </main>
  );
}
