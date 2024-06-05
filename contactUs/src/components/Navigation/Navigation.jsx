import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
       <div className="logo">
            <img src="/public/images/logo.png" alt="do some coding" />
       </div>
       <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
       </ul>
    </nav>
  )
}

export default Navigation