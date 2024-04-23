import cl from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={cl.preloader}>
      <div className={cl.loader}>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
      </div>
    </div>
  );
};

export default Loader;
