import css from "./HomePage.module.css"

export default function HomePage() {
    return (
      <div className={css.container}>
        <h2>Welcome to the Phonebook website!</h2>
        <p className={css.p}>Here you can save your contacts!</p>
      </div>
    );
}