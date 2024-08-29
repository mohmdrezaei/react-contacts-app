import styles from "./Header.module.css";

function Header(props) {
  const {currentPage , setCurrentPage} = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="./src/assets/logo.png" alt="" />
        <p>Contact App</p>
      </div>
      <div className={styles.search}>
        <img src="./src/assets/search.png" alt="" />
        <input type="text" name="" id="" placeholder="Search" />
      </div>

      <div className={styles.addBtn} onClick={()=>setCurrentPage("contactForm")}>
        <img src="./src/assets/add.png" alt="" />
        <p>Create contact</p>
      </div>
    </div>
  );
}

export default Header;
