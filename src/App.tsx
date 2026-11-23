import AvailableProxy from './components/availableProxy/AvailableProxy';
import Form from './components/form/Form';
import RequestInfo from './components/requestInfo/RequestInfo';
import BlockWrapper from './components/ui/blockWrapper/blockWrapper';
import Container from './components/ui/container/container';
import Main from './components/ui/main/main';
import Wrapper from './components/ui/wrapper/wrapper';
import { useAliveProxy } from './hooks/useAliveProxy';

const App = () => {
  const { list, count, totalCount } = useAliveProxy();
  return (
    <Wrapper>
      <Container>
        <Main>
          <Form />
          <BlockWrapper>
            <RequestInfo count={count} totalCount={totalCount}/>
            <AvailableProxy list={list} />
          </BlockWrapper>
        </Main>
      </Container>
    </Wrapper>
  )
}

export default App;
