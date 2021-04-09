(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={AppStyle:"styles_AppStyle__3lUZN",errorMessage:"styles_errorMessage__1nbn7"}},13:function(e,t,a){e.exports={ImageGalleryItemStyle:"styles_ImageGalleryItemStyle__UPw1j",ImageGalleryItemImage:"styles_ImageGalleryItemImage__2xgsP"}},14:function(e,t,a){e.exports={Overlay:"styles_Overlay__36hqC",ModalStyle:"styles_ModalStyle__3Y4eX"}},25:function(e,t,a){e.exports={ImageGalleryStyle:"styles_ImageGalleryStyle__zaXNQ"}},26:function(e,t,a){e.exports={ButtonStyle:"styles_ButtonStyle__3xg8s"}},28:function(e,t,a){e.exports={loader:"styles_loader__2ZQdl"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),s=a.n(o),c=(a(33),a(34),a(16)),l=a(10),i=a(3),u=a(4),h=a(6),m=a(5),p=a(12),d=a(8),g=a(1),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.inputHandler=function(t){e.setState({query:t.target.value})},e.formSubmitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.Searchbar,children:Object(g.jsxs)("form",{className:d.SearchForm,onSubmit:this.formSubmitHandler,children:[Object(g.jsx)("button",{type:"submit",className:d.SearchFormButton,children:Object(g.jsx)("span",{className:d.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.inputHandler})]})})}}]),a}(r.Component),b=a(25),j=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(g.jsx)("ul",{className:b.ImageGalleryStyle,children:this.props.children})}}]),a}(r.Component),f=a(13),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)("li",{id:this.props.id,className:f.ImageGalleryItemStyle,children:Object(g.jsx)("img",{src:this.props.url,alt:this.props.url,className:f.ImageGalleryItemImage,onClick:function(){return e.props.onClick(e.props.modalUrl)}})})}}]),a}(r.Component),S=a(26),v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)("button",{type:"button",className:S.ButtonStyle,onClick:function(){return e.props.onClick()},children:"Load more"})}}]),a}(r.Component),_=a(14),x=document.getElementById("modal-root"),I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).toggleModalHandler=function(t){t.target===t.currentTarget&&e.props.onClick(),"Escape"===t.code&&e.props.onClick()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.toggleModalHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.toggleModalHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:_.Overlay,onClick:this.toggleModalHandler,children:Object(g.jsx)("div",{className:_.ModalStyle,children:Object(g.jsx)("img",{src:this.props.url,alt:this.props.url})})}),x)}}]),a}(r.Component),k=a(15),w=a.n(k);w.a.defaults.baseURL="https://pixabay.com/api";var C=function(e){var t=e.query,a=e.perPage,r=e.page;return w.a.get("/?key=".concat("19923655-1a3b53a89179877892e074405","&q=").concat(t,"&").concat("image_type=photo&orientation=horizontal","&per_page=").concat(a,"&page=").concat(r)).then((function(e){return e.data}))},N=(a(54),a(27)),L=a.n(N),M=a(28),F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:M.loader,children:Object(g.jsx)(L.a,{type:"TailSpin",color:"#3f51b5",height:40,width:40,visible:!0})})}}]),a}(r.Component),H={query:"",images:[],perPage:9,page:1,modalImage:"",isLoading:!1,modalShow:!1,error:""},q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state=Object(l.a)({},H),e.formSubmit=function(t){var a=t.query;e.state.query!==a&&e.setState(Object(l.a)(Object(l.a)({},H),{},{query:a}))},e.getImagesHandler=function(){e.setState({isLoading:!0}),C(e.state).then((function(t){var a=t.hits;e.growthArrayOfImages(a)})).catch((function(t){console.log(t),e.setState({error:!0})})).finally((function(){return e.setState({isLoading:!1})}))},e.ImageItemClickHandler=function(t){e.setState({modalImage:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{modalShow:!e.modalShow}}))},e.listRef=n.a.createRef(),e}return Object(u.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){if(t.images.length<this.state.images.length){var a=this.listRef.current;return a.scrollHeight-a.scrollTop}return null}},{key:"componentDidUpdate",value:function(e,t,a){var r=this,n=t.query;this.state.query!==n&&(this.setState({isLoading:!0}),C(this.state).then((function(e){var t=e.hits;r.growthArrayOfImages(t)})).catch((function(e){console.log("error",e),r.setState({error:!0})})).finally((function(){return r.setState({isLoading:!1})}))),null!==a&&window.scrollTo({top:a-170,behavior:"smooth"})}},{key:"growthArrayOfImages",value:function(e){this.setState({images:[].concat(Object(c.a)(this.state.images),Object(c.a)(e)),page:this.state.page+1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.images,n=t.isLoading,o=t.modalShow,s=t.modalImage,c=r.length>0&&!n&&!a;return Object(g.jsxs)("div",{className:p.AppStyle,ref:this.listRef,children:[Object(g.jsx)(y,{onSubmit:this.formSubmit}),a&&Object(g.jsx)("p",{className:p.errorMessage,children:"Oops, there was an unexpected error, please try again."}),Object(g.jsx)(j,{children:r.map((function(t){var a=t.id,r=t.webformatURL,n=t.largeImageURL;return Object(g.jsx)(O,{id:a,url:r,modalUrl:n,onClick:e.ImageItemClickHandler},a)}))}),n&&Object(g.jsx)(F,{}),c&&Object(g.jsx)(v,{onClick:this.getImagesHandler}),o&&Object(g.jsx)(I,{url:s,onClick:this.toggleModal})]})}}]),a}(r.Component);s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"styles_Searchbar__27lKD",SearchForm:"styles_SearchForm__2asYX",SearchFormButton:"styles_SearchFormButton__2v1z8",SearchFormButtonLabel:"styles_SearchFormButtonLabel__2nkfm",SearchFormInput:"styles_SearchFormInput__12DXh"}}},[[75,1,2]]]);
//# sourceMappingURL=main.3cc9b797.chunk.js.map