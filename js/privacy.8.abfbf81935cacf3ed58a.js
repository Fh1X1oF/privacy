(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(a,e,s){"use strict";s.r(e);var n=s(319),i=s.n(n),r=s(38),u=s(320),h=s(332),c={name:"Shares",components:{Avatar:s.n(h).a},data:function(){return{uniqueShareUIDs:[],uidDisplaynameMap:{},isLoading:!0}},computed:{isEmptyList:function(){return!1===this.isLoading&&0===this.uniqueShareUIDs.length},emptyLabel:function(){return t("privacy","You don't have any shares with individual users.")}},mounted:function(){var a=this,e=Object(u.generateOcsUrl)("/apps/files_sharing/api/v1/shares?format=json&shared_with_me=false"),s=OC.getCurrentUser();i.a.get(e).then(function(e){e.data.ocs.data.forEach(function(e){if(e.share_with!==s)switch(e.share_type){case 0:-1===a.uniqueShareUIDs.indexOf(e.share_with)&&(a.uniqueShareUIDs.push(e.share_with),r.default.set(a.uidDisplaynameMap,e.share_with,e.share_with_displayname))}}),a.isLoading=!1})}},o=s(318),d=Object(o.a)(c,function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"who-has-access"},[s("span",{staticClass:"icon icon-loading",class:{hidden:!a.isLoading}}),a._v(" "),s("span",{class:{hidden:!a.isEmptyList}},[a._v("\n\t\t"+a._s(a.emptyLabel)+"\n\t")]),a._v(" "),a._l(a.uniqueShareUIDs,function(e){return s("Avatar",{key:e,attrs:{user:e,"display-name":a.uidDisplaynameMap[e],size:64}})})],2)},[],!1,null,null,null);e.default=d.exports}}]);
//# sourceMappingURL=privacy.8.abfbf81935cacf3ed58a.js.map