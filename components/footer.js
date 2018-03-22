import {
  Footer,
  Container,
  Content,
  Columns,
  Column,
  Icon,
} from 'bloomer'

const MainFooter = () =>
  <Footer id='footer'>
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with
              <span>
                <Icon hasTextColor="danger" className="fa fa-heart"></Icon>
              </span>
              by <a>Kyle Doherty</a>
            </p>
          </Column>
        </Columns>
        <Content isSize='small'>
            <p>Something</p>
            <p>Something Else</p>
        </Content>
      </Content>
    </Container>
  </Footer>

export default MainFooter
