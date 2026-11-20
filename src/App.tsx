import Container from './components/ui/container/container';
import Wrapper from './components/ui/wrapper/wrapper';

const App = () => {
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
              <div className="key">Loaded nodes: </div>
              <div className="value">7</div>
            </li>
            <li>
              <div className="key">Loaded nodes: </div>
              <div className="value">7</div>
            </li>
            <li>
              <div className="key">Loaded nodes: </div>
              <div className="value">7</div>
            </li>
          </ul>

        </main>
      </Container>
    </Wrapper>
  )
}

export default App;
