import React, { Component } from 'react'
import { Container, Divider, Header, List } from 'semantic-ui-react'
import jsonp from 'jsonp';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.updateRepos()
  }

  updateRepos() {
    jsonp('https://api.github.com/users/carlaraya/repos', null, function(err, data) {
      if (err) {
        console.error(err.message + '1');
      } else {
        this.setState(function() {
          if (Array.isArray(data.data)) {
            return { repos: data.data }
          }
        })
      }
    }.bind(this))
  }

  render() {
    const  pages = this.state.repos.filter(function(repo) {
      return repo.homepage
    })
    return (
      <Container text>
        <Divider hidden />
        <Header as='h1'>Welcome to carlaraya.github.io</Header>
        <List divided>
          {pages.map(function(page) {
            return (
              <List.Item>
                <List.Content>
                  <List.Header>
                    {page.name}
                  </List.Header>
                  <List.Description>
                    {page.description} (link: <a href={page.homepage}>{page.homepage}</a>)
                  </List.Description>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </Container>
    )
  }
}

export default App;
