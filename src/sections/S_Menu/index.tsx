import classes from './style.module.scss';
import classNames from 'classnames';

function S_Menu({className}:{className?: any}) {

  const cls = classNames(classes.root, {[className]: className});

  return (

    <header className={cls}>
      <nav>
        <ul className={classes.navList}>
          <li>Котики</li>
          <li>Котики уже дома</li>
          <li>Галерея</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  )
 }

 export default S_Menu;
