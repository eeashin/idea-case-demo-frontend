import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from './views/categoryViews/Categories';
import AddCategory from './views/categoryViews/AddCategory';
import Navigator from './views/Navigator';
import ExpensiveCategories from './views/categoryViews/ExpensiveCategories';
import RandomCategories from './views/categoryViews/RandomCategories';


class App extends Component {

  render() {
    return (
			<div className="App" style={{ marginTop: 5, marginBottom: 50 }}>
				<BrowserRouter>
					<div>
						<Navigator />
						<Switch>
							<Route exact path="/" component={Categories} />
							<Route path="/categories/" component={Categories} />
							<Route path="/add/" component={AddCategory} />
							<Route path="/expensive/" component={ExpensiveCategories} />
							<Route path="/random/" component={RandomCategories} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
    );
  }
}


export default App;
