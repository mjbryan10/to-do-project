(this["webpackJsonpto-do-project"]=this["webpackJsonpto-do-project"]||[]).push([[0],{27:function(t,e,a){t.exports=a(40)},39:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(23),c=a.n(r),l=a(18),i=a(5),d=a(6),s=a(8),p=a(7),u=a(9),m=a(13),f=a(10),b=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",a,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:h},"X")))}}]),e}(o.Component),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",boxShadow:"-5px 10px 24px -9px rgba(0,0,0,0.75)",float:"right"},v=b,y=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return n.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(o.Component);var j={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},g=function(){return n.a.createElement("header",{style:j},n.a.createElement("h1",null,"Todo List:"),n.a.createElement(m.b,{style:E,to:"/to-do-project/"},"Home")," | ",n.a.createElement(m.b,{style:E,to:"/about"},"About"))},O=a(26),x=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).state={title:""},a.onChange=function(t){return a.setState(Object(O.a)({},t.target.name,t.target.value))},a.onSubmit=function(t){t.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add a Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function k(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React crash course"))}var C=a(14),T=a.n(C),S=(a(39),function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).state={todos:[{id:T.a.v4(),title:"Here is a demo task",completed:!1},{id:T.a.v4(),title:"Here's another!",completed:!1},{id:T.a.v4(),title:"Okay, last one I promise",completed:!1}]},a.markComplete=function(t){a.setState({todos:a.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},a.delTodo=function(t){a.setState({todos:Object(l.a)(a.state.todos.filter((function(e){return e.id!==t})))})},a.addTodo=function(t){var e={id:T.a.v4(),title:t,completed:!1};a.setState({todos:[].concat(Object(l.a)(a.state.todos),[e])})},a}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(g,null),n.a.createElement(f.a,{exact:!0,path:"/to-do-project/",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{addTodo:t.addTodo}),n.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),n.a.createElement(f.a,{path:"/about",component:k}))))}}]),e}(o.Component));c.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.83b9bf9c.chunk.js.map