import classes from './style.module.scss';
import classNames from 'classnames';

function S_Footer({className}:{className?: any}) {

  const cls = classNames(classes.root, {[className]: className});

  return (
    <footer className={cls}>
      <ul className={classes.footerList}>
        <li>Помощь</li>
        <li>Правила</li>
        <li>Мы в соц. сетях</li>
      </ul>
    </footer>
  )
 }

 export default S_Footer;
