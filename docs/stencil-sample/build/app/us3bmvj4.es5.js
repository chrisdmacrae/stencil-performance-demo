/*! Built with http://stenciljs.com */
App.loadBundle("us3bmvj4",["exports"],function(e){var t=window.App.h,n=function(){function e(){this.elapsed=0,this.seconds=0,this.scale=0,this.intervalId=0}return e.prototype.componentDidLoad=function(){var e=this.tick.bind(this);this.intervalId=window.setInterval(e,1e3)},e.prototype.componentDidUpdate=function(){var e=this.elapsed/1e3%10;this.scale=1+(e>5?10-e:e)/10},e.prototype.tick=function(){this.seconds=this.seconds%10+1},e.prototype.render=function(){return this.el.style.setProperty("--scale",""+this.scale),t("div",{id:"stencilApp"},t("demo-heading",null,"Stencil Example"),t("main",null,t("demo-triangle",{x:0,y:0,s:1e3,seconds:this.seconds})))},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},elapsed:{type:Number,attr:"elapsed"},scale:{state:!0},seconds:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"main{position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0;left:50%;top:50%;width:10px;height:10px;background:#eee;-webkit-transform:scaleX(calc(var(--scale)/ 2.1)) scaleY(.7) translateZ(.1px);transform:scaleX(calc(var(--scale)/ 2.1)) scaleY(.7) translateZ(.1px);-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){this.hover=!1}return e.prototype.enter=function(){this.hover=!0},e.prototype.leave=function(){this.hover=!1},e.prototype.hostData=function(){return{onmouseenter:this.enter.bind(this),onmouseleave:this.leave.bind(this)}},e.prototype.render=function(){return this.el.style.setProperty("--size",""+this.size),this.el.style.setProperty("--x-coord",""+this.x),this.el.style.setProperty("--y-coord",""+this.y),t("div",{class:"demo-dot"},this.hover?"**"+this.text+"**":this.text)},Object.defineProperty(e,"is",{get:function(){return"demo-dot"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},hover:{state:!0},size:{type:Number,attr:"size"},text:{type:String,attr:"text"},x:{type:Number,attr:"x"},y:{type:Number,attr:"y"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".demo-dot{position:absolute;font:15px sans-serif;text-align:center;cursor:pointer;width:calc(var(--size) * 1px);height:calc(var(--size) * 1px);left:calc(var(--x-coord) * 1px);top:calc(var(--y-coord) * 1px);border-radius:calc(var(--size)/ 2 * 1px);line-height:calc(var(--size) * 1px);background:var(--bg,#00f)}.demo-dot:hover{background:var(--hover-bg,red)}"},enumerable:!0,configurable:!0}),e}();t("h1",null,"Stack Example");var o=function(){function e(){}return e.prototype.render=function(){return[t("h1",null,t("slot",null))]},Object.defineProperty(e,"is",{get:function(){return"demo-heading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"h1{color:#191e1e;border-bottom:1px solid #ddd;font-size:2.5em;font-weight:700;margin:0 0 15px;padding:0}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.render=function(){var e=this.s;if(e<=25)return t("demo-dot",{x:this.x-12.5,y:this.y-12.5,size:25,text:this.seconds.toString()});if(e/=2,"undefined"!=typeof performance)for(var n=performance.now()+.8;performance.now()<n;);return[t("demo-triangle",{x:this.x,y:this.y-e/2,s:e,seconds:this.seconds}),t("demo-triangle",{x:this.x-e,y:this.y+e/2,s:e,seconds:this.seconds}),t("demo-triangle",{x:this.x+e,y:this.y+e/2,s:e,seconds:this.seconds})]},Object.defineProperty(e,"is",{get:function(){return"demo-triangle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{s:{type:Number,attr:"s"},seconds:{type:Number,attr:"seconds"},x:{type:Number,attr:"x"},y:{type:Number,attr:"y"}}},enumerable:!0,configurable:!0}),e}();e.AppHome=n,e.DemoDot=r,e.DemoHeading=o,e.DemoTriangle=i,Object.defineProperty(e,"__esModule",{value:!0})});