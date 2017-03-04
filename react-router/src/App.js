import React from 'react';
import { Router,Route,hashHistory,browserHistory,Redirect,IndexRoute } from 'react-router';

// import Test from './Test'
// let Home = ()=><div><Test/></div>;

// let Home = ()=><div>我是 home 页面</div>;
// let About = ()=><div>我是 about 页面</div>;
// let Work = ()=><div>我是 work 页面</div>;

import Home from './Home'
import About from './About'
import Work from './Work'
import Me from './Me'
import PageNotFound from './PageNotFound'
import Index from './IndexRoute'
import Blog from './Blog'

class App extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Home}>
          <IndexRoute component={Index}/>
          <Route path='about' component={About}>
          {/* 不加 / , /aa/about,如果加上 / ,就是 /about */}
            <Route path='me' component={Me}/>
          </Route>
          {/* <Route path='work' component={Work}/> */}
          {/* 传多个组件 */}
          <Route path='work' components={{main:Work,body:PageNotFound}}/>

          <Route path='blog/:title' component={Blog}/>

          {/* <Route path='*' component={PageNotFound}/> */}
          {/* 404 页面放到最后 */}
          {/* <Redirect from='contact' to='about'/> */}

          <Route path='404' component={PageNotFound}/>
          <Redirect from='*' to='404'/>
        </Route>
      </Router>
    )
  }
}

export default App;

//hashHistory
//给我们的路径添加一个`/#/`,防止浏览器跳转到其他页面,始终拿到的是 index.html ,不需要服务器支持

//browserHistory
//利用我们的服务器,实现页面跳转,不论访问任何路径,都返回 index.html ,这样路径看起来美观正常,但是需要有本地服务器支持,如果托管在 github,coding 等网站上的话用不了
