import classes from './style.module.scss';
import classNames from 'classnames';

function S_Main({className}:{className?: any}) {

  const cls = classNames(classes.root, {[className]: className});

  return (

    <main className={cls}>
    <h1>КОТЕГИ</h1>
    <div>контент с котеками</div>
  </main>
  )
 }

 export default S_Main;
