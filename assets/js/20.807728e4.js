(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{506:function(t,s,e){"use strict";e.r(s);e(490),e(47);var n=e(492),i=e(493),r=e(491),a=e.n(r),o={components:{Ascending:n.a,Descending:i.a,InfiniteLoading:a.a},beforeMount:function(){1==this.reverse&&(this.orders=this.orders.slice().reverse())},props:["index","orderOption","minimal"],data:function(){return{orders:["Desc","Asc"],currentPage:1}},computed:{posts:function(){var t=this.$pagination._matchedPages;return"Asc"==this.orders[0]?t.slice().reverse().slice(0,10*this.currentPage):t.slice(0,10*this.currentPage)},orderby:function(){return this.orders[0]},toOrder:function(){return this.orders.slice(-1)[0]}},methods:{changeOrder:function(){this.orders=this.orders.slice().reverse()},calcIndex:function(t){return"Asc"==this.orderby?t+1:this.posts.length-t},infinite:function(t){var s=this.$pagination._matchedPages,e=s.length/10+(s.length%10>0?1:0);this.currentPage+=1,this.currentPage>=e?t.complete():t.loaded()}}},c=e(37),l=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-white dark:bg-dark-900"},[e("div",{staticClass:" mx-auto py-6 px-3 ",class:t.minimal?"max-w-screen-md":"max-w-screen-lg"},[t.orderOption?e("div",{staticClass:"flex justify-end py-10 text-gray-600 gap-x-1 select-none"},[e("div",{staticClass:"flex items-center cursor-pointer",on:{click:t.changeOrder}},["Desc"==t.toOrder?e("Descending",{staticClass:"w-5 h-5"}):e("Ascending",{staticClass:"w-5 h-5"}),t._v(" "),e("span",[t._v(t._s(t.toOrder))])],1)]):t._e(),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-x-5 ",class:t.minimal?"gap-y-14":"gap-y-20 sm:grid-cols-2 lg:grid-cols-3 "},t._l(t.posts,(function(s,n){return e("post-card",{attrs:{post:s,index:!!t.index&&t.calcIndex(n),minimal:t.minimal}})})),1),t._v(" "),e("ClientOnly",[e("infinite-loading",{staticClass:"mt-20",attrs:{spinner:"spiral"},on:{infinite:t.infinite}},[e("div",{attrs:{slot:"spinner"},slot:"spinner"},[t._v("Loading...")]),t._v(" "),e("div",{staticClass:"dark:text-gray-300 text-gray-500",attrs:{slot:"no-more"},slot:"no-more"},[t._v("\n          마지막 페이지 입니다.\n        ")]),t._v(" "),e("div",{staticClass:"dark:text-gray-300 text-gray-500 text-xs",attrs:{slot:"no-results"},slot:"no-results"})])],1)],1)])}),[],!1,null,null,null);s.default=l.exports}}]);