(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(52)},23:function(e,a,t){},25:function(e,a,t){},46:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(14),l=t.n(c),r=t(2),i=t(3),o=t(5),m=t(4),d=t(6),u=t(16),g=(t(23),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("input",{onChange:e.handleInputChange,onKeyPress:e.handleKeyPress,value:e.searchInput,className:"form-control form-control-lg mb-2 form-control-borderless",type:"search",placeholder:"Search input"})),s.a.createElement("div",{className:"col-12 mb-2 col-md-3 searchbarButtons"},s.a.createElement("button",{onClick:e.handleSubmit,className:"btn btn-lg btn-light",type:"button"},"Search"),s.a.createElement("button",{onClick:e.addToSaved,className:"btn btn-lg btn-light ml-2",type:"button"},"Save"))))}),p=(t(25),function(e){return e.loading?s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("img",{src:"./three-dots.svg",alt:"loading"})):0===e.images.length&&0!==e.page?s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("p",null,"Nothing to show. Try different search.")):s.a.createElement("div",{className:"row images-wrapper "+e.className},e.images.map(function(e,a){return s.a.createElement("div",{key:a,className:"col-12 col-sm-6 col-md-4 image-spacing"},s.a.createElement("div",{style:(t=e,{backgroundImage:"url("+t+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}),className:"col-12 image-wrapper"}));var t}))}),h=t(15),v=t.n(h),f=function(e,a,t){return v.a.get("https://api.unsplash.com/search/photos?page=".concat(a,"&query=").concat(e,"&per_page=12&client_id=").concat("9a94e4bcdb356f870710304588dfe732fc520d9af9b07195981608cdbb796644")).then(function(e){var a=e.data.total_pages,n=e.data.results.map(function(e){return e.urls.small});t(n,a)}).catch(function(e){return e})},b=function(e){return s.a.createElement("nav",{className:e.className,"aria-label":"pagination"},s.a.createElement("ul",{className:"pagination pagination-lg justify-content-center"},s.a.createElement("li",{onClick:e.pageDown,className:"".concat(e.page<=1?"disabled":""," page-item")},s.a.createElement("div",{className:"page-link",href:"#"},"Previous")),s.a.createElement("li",{onClick:e.pageDown,className:"".concat(e.page<=1?"disabled":""," page-item d-none d-sm-block")},s.a.createElement("div",{className:"page-link",href:"#"},e.page-1)),s.a.createElement("li",{className:"page-item disabled"},s.a.createElement("div",{className:"page-link active",href:"#"},e.page)),s.a.createElement("li",{onClick:e.pageUp,className:"".concat(e.page<e.totalPages?"":"disabled"," page-item d-none d-sm-block")},s.a.createElement("div",{className:"page-link",href:"#"},e.page+1)),s.a.createElement("li",{onClick:e.pageUp,className:"".concat(e.page<e.totalPages?"":"disabled"," page-item")},s.a.createElement("div",{className:"page-link",href:"#"},"Next"))))},E=function(e){return s.a.createElement("ul",{className:"list-group searchHistory"},e.savedInputs.map(function(a,t){return s.a.createElement("li",{key:t,onClick:function(){return e.handleSavedClick(a)},className:"list-group-item"},a," ",s.a.createElement("span",{onClick:function(t){return e.removeSaved(t,a)}},"\xd7"))}))},N=(t(46),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){t.setState({searchInput:e.target.value})},t.addToSaved=function(){var e=t.state.searchInput;if(e.length>0){var a=t.state.savedInputs.filter(function(a){return a.toLowerCase()!==e.toLowerCase()}),n=[e].concat(Object(u.a)(a));t.setState({savedInputs:n})}},t.removeSaved=function(e,a){e.preventDefault();var n=t.state.savedInputs.filter(function(e){return e!==a});t.setState({savedInputs:n})},t.handleSavedClick=function(e){t.setState({searchInput:e},t.handleSearchSubmit)},t.handlePageUp=function(e){t.state.page<t.state.totalPages&&t.setState({page:t.state.page+1},t.handleImagesFetch)},t.handlePageDown=function(e){t.state.page>1&&t.setState({page:t.state.page-1},t.handleImagesFetch)},t.setLoading=function(e){t.setState({loading:e})},t.setImages=function(e,a){t.setState({totalPages:a,images:e})},t.handleKeyPress=function(e){"Enter"===e.key&&t.handleSearchSubmit()},t.handleSearchSubmit=function(){t.setState({page:1},t.handleImagesFetch)},t.handleImagesFetch=function(){t.setLoading(!0);var e=t.state.searchInput.replace(" ","+");f(e,t.state.page,t.setImages).then(function(){t.setLoading(!1)})},t.state={loading:!1,searchInput:"",savedInputs:[],images:[],page:0,totalPages:1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container imageSearch"},s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-12 "},s.a.createElement(g,{searchInput:this.state.searchInput,handleInputChange:this.handleInputChange,handleKeyPress:this.handleKeyPress,handleSubmit:this.handleSearchSubmit,addToSaved:this.addToSaved}))),s.a.createElement("div",{className:"row mt-2"},s.a.createElement("div",{className:"col-md-9"},s.a.createElement(p,{page:this.state.page,loading:this.state.loading,images:this.state.images,className:"mb-2"}),this.state.totalPages>1&&!this.state.loading&&s.a.createElement(b,{className:"mb-4 mt-2",page:this.state.page,pageUp:this.handlePageUp,pageDown:this.handlePageDown,totalPages:this.state.totalPages})),s.a.createElement("div",{className:"col-md-3 mb-2 order-first order-md-12"},s.a.createElement(E,{removeSaved:this.removeSaved,handleSavedClick:this.handleSavedClick,savedInputs:this.state.savedInputs}))))}}]),a}(n.Component)),S=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(N,null))}}]),a}(n.Component);t(48),t(50);l.a.render(s.a.createElement(S,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.a7aedadf.chunk.js.map