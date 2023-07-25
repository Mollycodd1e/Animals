import S_Main from "@/src/sections/S_Main";
import S_Menu from "@/src/sections/S_Menu";
import classes from "./style.module.scss";
import classNames from 'classnames';
import S_Footer from "@/src/sections/S_Footer.tsx";

function Home({className}:{className?: any}) {

  const cls = classNames(classes.root, {[className]: className});
  return (
      <div className={classes.pageWrapper}>
        <S_Menu />
        <S_Main />
        <S_Footer />
      </div>
  )
}

export default Home;


