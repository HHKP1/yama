(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["collectionlist"],{"19a9":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"defect_wrapper"},[e("mq-layout",{attrs:{mq:"md+"}},[e("vue-element-loading",{attrs:{active:t.isActive,size:"60",isActiveDelay:!0,duration:"1",spinner:"spinner",color:"#FF6700"}}),e("div",{staticClass:"defect_content"},[e("div",{staticClass:"defect_filter_count"},[e("div",{staticClass:"defect_filter_item"},[e("p",{staticClass:"defect_title"},[t._v("Загалом дефектів знайдено: "),e("span",[t._v(t._s(t.dfCard.length))])])])]),e("div",{staticClass:"sorted_item"},[e("p",{staticClass:"sorted_title"},[t._v("Показані останні дефекти зі змінами (за замовчуванням)")])]),e("transition",{attrs:{name:"loader-map"}},[e("GoogleMap",{directives:[{name:"show",rawName:"v-show",value:t.$API2.showMap,expression:"$API2.showMap"}],attrs:{defectMarkers:t.dfCard,mapTitle:"Map"}})],1),e("div",{staticClass:"grid-container_overlay"},[0!=t.$API2.orgInfo.length||t.$API2.showMap?t._e():e("div",{staticClass:"carousel_overlay"},[e("p",{staticClass:"empty_message"},[t._v("По цьому запиту немає дефектів")])])]),e("div",{staticClass:"grid-block"},[e("transition",{attrs:{name:"fade-loader"}},[!t.$API2.showMap&&t.$API2.orgInfo.length>0?e("div",{staticClass:"grid-container"},t._l(t.paginate,(function(s){return e("div",{key:s.id,staticClass:"defect_card"},[e("router-link",{attrs:{to:"/"+s.id}},[e("div",{staticClass:"my-container",staticStyle:{width:"100%",display:"block",height:"100%"},on:{click:function(a){return t.listClick(a,"/"+s.id)}}},[e("vue-element-loading",{attrs:{active:t.isActive,size:"60",duration:"1",spinner:"spinner",color:"#FF6700"}}),e("div",{staticClass:"defect_image"},[e("img",{staticClass:"card_image",attrs:{loading:"eager",src:s.photo[0].url,alt:""}}),e("p",{staticClass:"defect_date"},[t._v(t._s(t._f("moment")(new Date(s.photo[0].timestamp),"DD.MM.YY в HH:mm")))]),t._l(t.arrMarkers,(function(a){return e("div",{key:a.id,staticClass:"defect_color"},[a.name===s.defect_type?e("img",{staticClass:"type_marker",staticStyle:{margin:"0 20px"},attrs:{src:a.icon,alt:"Type marker"}}):t._e()])}))],2),e("div",{staticClass:"defect_info"},[e("div",{staticClass:"defect_status"},[e("div",{staticClass:"status_item"},["new"==s.status?e("span",[t._v("Новий")]):t._e(),"approved"==s.status?e("span",[t._v("Погоджений")]):t._e(),"sent"==s.status?e("span",[t._v("Відправлений")]):t._e(),"replied"==s.status?e("span",[t._v("Відповідь")]):t._e(),"no_answer"==s.status?e("span",[t._v("Немає відповіді")]):t._e(),"rejected"==s.status?e("span",[t._v("Відхилений")]):t._e(),"escalated"==s.status?e("span",[t._v("Ескалований")]):t._e(),"in_progress"==s.status?e("span",[t._v("В процесі")]):t._e(),"fixed"==s.status?e("span",[t._v("Виправлений")]):t._e()]),e("div",{staticClass:"status_comments"},[s.comments?e("p",{staticClass:"status_count",attrs:{title:"Кількість коментарів: "+s.comments.length}},[t._v(t._s(s.comments.length))]):e("p",{staticClass:"status_count"},[t._v("0")]),e("img",{attrs:{src:a("6503"),alt:""}})])]),e("p",{staticClass:"defect_adress",attrs:{title:s.address}},[t._v(t._s(s.address))])])],1)])],1)})),0):t._e()])],1)],1),t.$API2.showMap?t._e():e("div",{staticClass:"card_pagination"},[e("div",{staticClass:"pagination_control"},[e("ul",{staticClass:"pagination"},t._l(t.totalPages,(function(s){return e("li",{key:s,staticClass:"waves-effect",class:{active:t.currentPage===s,last:s==t.totalPages&&Math.abs(s-t.currentPage)>3,first:1==s&&Math.abs(s-t.currentPage)>3},on:{click:function(a){return t.setPage(s)}}},[t._v(" "+t._s(s)+" ")])})),0)])])],1),e("mq-layout",{attrs:{mq:"sm_album"}},[e("vue-element-loading",{attrs:{active:t.isActive,size:"60",isActiveDelay:!0,duration:"1",spinner:"spinner",color:"#FF6700"}}),e("div",{staticClass:"defect_content"},[e("div",{staticClass:"defect_filter_count"},[e("div",{staticClass:"defect_filter_item"},[e("p",{staticClass:"defect_title"},[t._v("Загалом дефектів знайдено: "),e("span",[t._v(t._s(t.dfCard.length))])])])]),e("div",{staticClass:"sorted_item"},[e("p",{staticClass:"sorted_title"},[t._v("Показані останні дефекти зі змінами (за замовчуванням)")])]),e("transition",{attrs:{name:"loader-map"}},[e("GoogleMap",{directives:[{name:"show",rawName:"v-show",value:this.$API2.showMap,expression:"this.$API2.showMap"}],attrs:{defectMarkers:t.dfCard,mapTitle:"Map"}})],1),e("div",{staticClass:"grid-container_overlay"},[0!=this.$API2.orgInfo.length||this.$API2.showMap?t._e():e("div",{staticClass:"carousel_overlay"},[e("p",{staticClass:"empty_message"},[t._v("По цьому запиту немає дефектів")])])]),e("div",{staticClass:"grid-block"},[e("transition",{attrs:{name:"fade-loader"}},[!this.$API2.showMap&&this.$API2.orgInfo.length>0?e("div",{staticClass:"grid-container"},t._l(t.paginate,(function(s){return e("div",{key:s.id,staticClass:"defect_card"},[e("router-link",{attrs:{to:"/"+s.id}},[e("div",{staticClass:"my-container",staticStyle:{width:"100%",display:"block",height:"100%"},on:{click:function(a){return t.listClick(a,"/"+s.id)}}},[e("vue-element-loading",{attrs:{active:t.isActive,size:"60",duration:"1",spinner:"spinner",color:"#FF6700"}}),e("div",{staticClass:"defect_image"},[e("img",{staticClass:"card_image",attrs:{src:s.photo[0].url,alt:""}}),e("p",{staticClass:"defect_date"},[t._v(t._s(t._f("moment")(new Date(s.photo[0].timestamp),"DD.MM.YY в HH:mm")))]),t._l(t.arrMarkers,(function(a){return e("div",{key:a.id,staticClass:"defect_color"},[a.name===s.defect_type?e("img",{staticClass:"type_marker",staticStyle:{margin:"0 20px"},attrs:{src:a.icon,alt:"Type marker"}}):t._e()])}))],2),e("div",{staticClass:"defect_info"},[e("div",{staticClass:"defect_status"},[e("div",{staticClass:"status_item"},["new"==s.status?e("span",[t._v("Новий")]):t._e(),"approved"==s.status?e("span",[t._v("Погоджений")]):t._e(),"sent"==s.status?e("span",[t._v("Відправлений")]):t._e(),"replied"==s.status?e("span",[t._v("Відповідь")]):t._e(),"no_answer"==s.status?e("span",[t._v("Немає відповіді")]):t._e(),"rejected"==s.status?e("span",[t._v("Відхилений")]):t._e(),"escalated"==s.status?e("span",[t._v("Ескалований")]):t._e(),"in_progress"==s.status?e("span",[t._v("В процесі")]):t._e(),"fixed"==s.status?e("span",[t._v("Виправлений")]):t._e()]),e("div",{staticClass:"status_comments"},[s.comments?e("p",{staticClass:"status_count",attrs:{title:"Кількість коментарів: "+s.comments.length}},[t._v(t._s(s.comments.length))]):e("p",{staticClass:"status_count"},[t._v("0")]),e("img",{attrs:{src:a("6503"),alt:""}})])]),e("p",{staticClass:"defect_adress",attrs:{title:s.address}},[t._v(t._s(s.address))])])],1)])],1)})),0):t._e()])],1)],1),this.$API2.showMap?t._e():e("div",{staticClass:"card_pagination"},[e("div",{staticClass:"pagination_control"},[e("ul",{staticClass:"pagination"},t._l(t.totalPages,(function(s){return e("li",{key:s,staticClass:"waves-effect",class:{active:t.currentPage===s,last:s==t.totalPages&&Math.abs(s-t.currentPage)>3,first:1==s&&Math.abs(s-t.currentPage)>3},on:{click:function(a){return t.setPage(s)}}},[t._v(" "+t._s(s)+" ")])})),0)])])],1),e("mq-layout",{attrs:{mq:"sm"}},[e("div",{staticClass:"container_works_mb"},[e("div",{staticClass:"container_defects_mb"},[e("div",{staticClass:"defect_content_mb"},[e("GoogleMap",{directives:[{name:"show",rawName:"v-show",value:this.$API2.showMap,expression:"this.$API2.showMap"}],attrs:{defectMarkers:t.dfCard,mapTitle:"Map"}}),e("div",{staticClass:"grid-container_overlay"},[0!=this.$API2.orgInfo.length||this.$API2.showMap?t._e():e("div",{staticClass:"carousel_overlay"},[e("p",{staticClass:"empty_message"},[t._v("По цьому запиту немає дефектів")])])]),e("p",{staticClass:"sorted_title_mb"},[t._v("Показані останні дефекти зі змінами (за замовчуванням)")]),!this.$API2.showMap&&this.$API2.orgInfo.length>0?e("div",{staticClass:"grid-container_mb"},t._l(t.paginate,(function(s){return e("div",{key:s.id,staticClass:"defect_card"},[e("router-link",{attrs:{to:"/"+s.id}},[e("div",{staticClass:"my-container",staticStyle:{width:"100%",display:"block",height:"100%"},on:{click:function(a){return t.listClick(a,"/"+s.id)}}},[e("vue-element-loading",{attrs:{active:t.isActive,size:"60",duration:"1",spinner:"spinner",color:"#FF6700"}}),e("div",{staticClass:"defect_image"},[e("img",{staticClass:"card_image_mb",attrs:{src:s.photo[0].url,alt:""}}),e("p",{staticClass:"defect_date"},[t._v(t._s(t._f("moment")(new Date(s.photo[0].timestamp),"DD.MM.YY в HH:mm")))]),e("div",{staticClass:"defect_color"})]),e("div",{staticClass:"defect_info"},[e("div",{staticClass:"defect_status"},[e("div",{staticClass:"status_item_mb"},["new"==s.status?e("span",[t._v("Новий")]):t._e(),"approved"==s.status?e("span",[t._v("Погоджений")]):t._e(),"sent"==s.status?e("span",[t._v("Відправлений")]):t._e(),"replied"==s.status?e("span",[t._v("Відповідь")]):t._e(),"no_answer"==s.status?e("span",[t._v("Немає відповіді")]):t._e(),"rejected"==s.status?e("span",[t._v("Відхилений")]):t._e(),"escalated"==s.status?e("span",[t._v("Ескалований")]):t._e(),"in_progress"==s.status?e("span",[t._v("В процесі")]):t._e(),"fixed"==s.status?e("span",[t._v("Виправлений")]):t._e()]),e("div",{staticClass:"status_comments"},[s.comments?e("p",{staticClass:"status_count",attrs:{title:"Кількість коментарів: "+s.comments.length}},[t._v(t._s(s.comments.length))]):e("p",{staticClass:"status_count"},[t._v("0")]),e("img",{attrs:{src:a("6503"),alt:""}})])]),e("p",{staticClass:"defect_adress",attrs:{title:s.address}},[t._v(t._s(s.address))])])],1)])],1)})),0):t._e(),this.$API2.showMap?t._e():e("div",{staticClass:"card_pagination"},[e("div",{staticClass:"pagination_control"},[e("ul",{staticClass:"pagination"},t._l(t.totalPages,(function(s){return e("li",{key:s,staticClass:"waves-effect",class:{active:t.currentPage===s,last:s==t.totalPages&&Math.abs(s-t.currentPage)>3,first:1==s&&Math.abs(s-t.currentPage)>3},on:{click:function(a){return t.setPage(s)}}},[t._v(" "+t._s(s)+" ")])})),0)])])],1)])])])],1)},i=[],n=a("1da1"),r=(a("d81d"),a("b0c0"),a("fb6a"),a("96cf"),a("a026")),c=a("6ad0"),o=a.n(c),l=a("6ba0"),d=a("9735"),_={name:"collectionlist",components:{VueElementLoading:o.a,GoogleMap:l["default"]},data:function(){return{options:{options_sort_by:[{label:"Нові",value:"new"},{label:"В процесі",value:"in_progress"}]},comment:"",sort_by:"",dfCards:[],isComments:!1,isOpen:!1,isActive:!1,isExpand:!1,appsLoaded:!1,selfFilters:!1,showMap:!1,currentPage:1,resultCount:0,itemsPerPage:8}},created:function(){r["a"].prototype.$API3=this},beforeMount:function(){this.isActive||(this.isActive=!0)},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.$API.title="Колекція",t.$API.page="collection",t.isActive=!1,t.dfCards=t.dfCard;case 4:case"end":return s.stop()}}),s)})))()},methods:{listClick:function(t,s){!t||2!=t.which&&4!=t.button||(t.preventDefault(!0),window.open(s,"_new"),this.$eventBus.$emit("dfCards",this.dfCards))},setPage:function(t){this.currentPage=t}},computed:{dfCard:function(){return this.$API2.orgInfo.map((function(t){return{id:t.id,address:t.address,photo:t.photos,status:t.case_status.current.status,comments:t.comments,defect_type:t.defect_type}}))},arrMarkers:function(){return d["a"].map((function(t){return{icon:t.icon,name:t.name}}))},totalPages:function(){return Math.ceil(this.resultCount/this.itemsPerPage)},paginate:function(){if(this.dfCard){this.resultCount=this.$API2.dfCard.length,this.currentPage>=this.totalPages&&(this.currentPage=this.totalPages);var t=this.currentPage*this.itemsPerPage-this.itemsPerPage;return this.$API2.dfCard.slice(t,t+this.itemsPerPage)}}},watch:{}},u=_,p=(a("989a"),a("2877")),v=Object(p["a"])(u,e,i,!1,null,null,null);s["default"]=v.exports},"8f71":function(t,s,a){},"989a":function(t,s,a){"use strict";a("8f71")}}]);