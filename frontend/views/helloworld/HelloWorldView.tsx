import { Link } from "react-router-dom";

export default function HelloWorldView() {

  return (
    <>
      <section className="flex p-m gap-m items-end">
      <header className="App-header">
        <h1>Bem Vindos a NunesSports</h1>
        <p>Explore os produtos clicando ao lado ou <Link to="/products">AQUI</Link></p>
      </header>
      </section>
    </>
  );
}
