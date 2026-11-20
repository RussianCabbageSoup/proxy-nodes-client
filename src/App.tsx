import Container from './components/ui/container/container';
import Wrapper from './components/ui/wrapper/wrapper';

const App = () => {
  const loadedProxy = 0;
  const visitedProxy = 0;
  const ping = 0;

  return (
    <Wrapper>
      <Container>
        <main className='main'>

          <form className="form">
            <div className="form__block">
              <div>TARGET URL</div>
              <input type="text" />
            </div>
            <button>SEND</button>
          </form>

          <ul className="request-info">
            <li>
              <div className="key">Loaded proxy: </div>
              <div className="value">{ loadedProxy }</div>
            </li>
            <li>
              <div className="key">Visited proxy: </div>
              <div className="value">{ visitedProxy }</div>
            </li>
            <li>
              <div className="key">Ping: </div>
              <div className="value">{ ping } ms</div>
            </li>
          </ul>

        </main>
      </Container>
    </Wrapper>
  )
}

export default App;
