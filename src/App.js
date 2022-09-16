import style from './App.module.css';
import Loading from './components/Loading';
import useData from './hooks/useData';
import { openModal } from './components/openModal';

function App() {
  const { loading, dataResp, valueInput, handleOnClick, handleOnChange } =
    useData('gifs');

  function handleOpen(url) {
    openModal(url);
  }

  return (
    <main className={style.app}>
      <section className={style.content}>
        <h1 className={style.gifsTitle}>
          <span>Gifs...</span>
        </h1>
        <div className={style.searchBar}>
          <input type='text' onChange={handleOnChange} value={valueInput} />
          <div className={style.actions}>
            <button onClick={handleOnClick}>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section className={style.contentResponse}>
          {dataResp.map((gif) => {
            return (
              <div key={gif.id}>
                <img
                  src={gif.images.downsized.url}
                  alt=''
                  onClick={() => {
                    handleOpen(gif.images.downsized.url);
                  }}
                />
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
}

export default App;
